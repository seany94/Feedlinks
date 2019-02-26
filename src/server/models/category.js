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

  return {
    addCategory
  };
};