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

            if(password == req.body.password){
                res.cookie('loggedin', password);

                dbPoolInstance.query(`SELECT * FROM users WHERE name = '${user.name}'`, (error, queryResult) =>{
                    if( error ){

                        // invoke callback function with results after query has executed
                        callback(error, null, null);

                    }
                    else{
                        user:[user.name]

                        // invoke callback function with results after query has executed
                        callback(null, queryResult.rows, user);
                    }
                })
            }
            else{
                res.send('wrong password');
            }
        }
    })
  };

  return {
    signin
  };
};