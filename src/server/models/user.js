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
            res.cookie('loggedin', true);
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

  return {
    signin,
    register
  };
};