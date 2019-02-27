const sha256 = require('js-sha256');

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

  let signin = (req, res, callback) => {
    let queryString = `SELECT * FROM users WHERE username='${req.body.username}'`;

    dbPoolInstance.query(queryString, (error, queryResult) => {
        // if the user doesnt exist
        if(queryResult.rows.length === 0){
            res.send("error");
        }
        else{

            const user = queryResult.rows[0];
            const password = user.password
            const inputPass = sha256(req.body.password)

            if(password == inputPass){
                res.cookie('loggedin', true);
                res.cookie('user', user.id);

                dbPoolInstance.query(`SELECT * FROM users WHERE name = '${user.name}'`, (error, queryResult) =>{
                    if( error ){

                        // invoke callback function with results after query has executed
                        callback(error, null, null);

                    }
                    else{
                        // invoke callback function with results after query has executed
                        callback(null, queryResult.rows);
                    }
                })
            }
            else{
                res.send('wrong password');
            }
        }
    })
  };

  let register = (req, res, callback) => {
    dbPoolInstance.query("SELECT name, username FROM users", (error, queryResult) => {
        let validate = true;
        let queryName = queryResult.rows;
        let paramName = req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1);
        let paramUserName = req.body.username;
        for(let i = 0; i < queryName.length; i++){
            if(paramName == queryName[i].name || paramUserName == queryName[i].username){
                validate = false;
            }
        }
        if(validate === false){
            res.send('error');
        }
        else if(validate === true){
            const user = queryResult.rows[0];

            res.cookie('loggedin', true);
            res.cookie('user', user.id);

            const queryString = 'INSERT INTO users (name, photo_url, username, password) VALUES ($1, $2, $3, $4)';
            const values = [
                req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1),
                req.body.photo,
                req.body.username,
                sha256(req.body.password)
            ];
            dbPoolInstance.query(queryString, values, (error, queryResult) => {
              if( error ){

                // invoke callback function with results after query has executed
                callback(error, null, null);

              }
              else{

                // invoke callback function with results after query has executed
                callback(null, queryResult.rows, values);
              }
            });
        }
    });
  };

  let userFind = (cookie, callback) => {
    dbPoolInstance.query(`SELECT * FROM users WHERE id = '${cookie}'`, (error, queryResult) =>{
        if( error ){

            // invoke callback function with results after query has executed
            callback(error, null, null);

          }
          else{

            // invoke callback function with results after query has executed
            callback(null, queryResult.rows);
          }
    })
  };

  let userFeed = (cookie, callback) => {
    dbPoolInstance.query(`SELECT * FROM users WHERE id = '${cookie}'`, (error, queryResult) =>{
        let user = queryResult.rows;
        dbPoolInstance.query(`SELECT feed_url FROM feeds INNER JOIN users ON (users.id = feeds.user_id AND users.id = '${cookie}')`, (error, queryResult) =>{
            if( error ){

                // invoke callback function with results after query has executed
                callback(error, null, null);

              }
              else{

                // invoke callback function with results after query has executed
                callback(null, queryResult.rows);
              }
        })
    })
  };

  let userCategory = (cookie, callback) => {
    dbPoolInstance.query(`SELECT * FROM users WHERE id = ${cookie}`, (error, queryResult) =>{
        let user = queryResult.rows;
        dbPoolInstance.query(`SELECT title, date_added FROM categories INNER JOIN users ON (users.id = categories.user_id AND users.id = ${cookie}) ORDER BY date_added`, (error, queryResult) =>{
            if( error ){

                // invoke callback function with results after query has executed
                callback(error, null, null);

              }
              else{

                // invoke callback function with results after query has executed
                callback(null, queryResult.rows);
              }
        })
    })
  };

  return {
    signin,
    register,
    userFind,
    userFeed,
    userCategory
  };
};