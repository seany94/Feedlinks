/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

  let addCategory = (req, res, cookie, callback) => {
    const queryString = 'INSERT INTO categories (title, user_id) VALUES ($1, $2)';
    const values = [
            req.body.category.charAt(0).toUpperCase() + req.body.category.slice(1),
            cookie
        ];
    dbPoolInstance.query(queryString, values, (error, queryResult) =>{
        if( error ){
            // invoke callback function with results after query has executed
            callback(error, null, null);

          }
          else{

            // invoke callback function with results after query has executed
            callback(null, queryResult.rows, values);
          }
    })
  };

  let delCategory = (req, res, cookie, callback) => {
    const queryString = `DELETE FROM categories WHERE title = '${req.body.title}'`;

    dbPoolInstance.query(queryString, (error, queryResult) =>{
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

  let editCategory = (req, res, cookie, callback) => {
    dbPoolInstance.query(`SELECT id FROM users WHERE id = ${cookie}`, (error, queryResult) =>{
        dbPoolInstance.query(`UPDATE categories SET title = '${req.body.title}' WHERE user_id = ${cookie} AND title = '${req.body.name}'`, (error, queryResult) =>{
            if( error ){

            // invoke callback function with results after query has executed
                callback(error, null, null, null);

            }
            else{
            // invoke callback function with results after query has executed
                callback(null, queryResult.rows);
            }
        })
    // })
    })
  };

  let sorted = (req, res, cookie, callback) => {
    dbPoolInstance.query(`SELECT id FROM users WHERE id = ${cookie}`, (error, queryResult) =>{
        if(req.body.title === "unsorted"){
             dbPoolInstance.query(`SELECT * FROM feeds WHERE user_id = ${cookie} AND cat_id IS NULL`, (error, queryResult) =>{
                if( error ){

                // invoke callback function with results after query has executed
                    callback(error, null, null, null);

                }
                else{
                // invoke callback function with results after query has executed
                    callback(null, queryResult.rows);
                }
            })
        }
        else{
            dbPoolInstance.query(`SELECT * FROM feeds WHERE user_id = ${cookie} AND cat_id = ${req.body.title}`, (error, queryResult) =>{
                if( error ){

                // invoke callback function with results after query has executed
                    callback(error, null, null, null);

                }
                else{

                // invoke callback function with results after query has executed
                    callback(null, queryResult.rows);
                }
            })
        }
    })
  };

  let find = (cookie, catId, callback) => {
    dbPoolInstance.query(`SELECT * FROM users WHERE id = ${cookie}`, (error, queryResult) =>{
        dbPoolInstance.query(`SELECT title FROM categories INNER JOIN users ON (users.id = categories.user_id AND users.id = ${cookie}) WHERE categories.id = ${catId}`, (error, queryResult) =>{
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
    addCategory,
    delCategory,
    editCategory,
    sorted,
    find
  };
};