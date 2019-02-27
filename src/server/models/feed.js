/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

  let addFeed = (req, res, cookie, callback) => {
    const queryString = 'INSERT INTO feeds (feed_url, user_id, cat_id) VALUES ($1, $2, $3)';
    const values = [
            req.body.feed_url,
            cookie,
            req.body.option
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
    addFeed
  };
};