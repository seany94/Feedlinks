/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

  let addFeed = (req, res, cookie, callback) => {
    if(req.body.option === "Unsorted"){
        const queryString = 'INSERT INTO feeds (feed_url, user_id) VALUES ($1, $2)';
        const values = [
                req.body.feed_url,
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
    }
    else{
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
    }
  };

  let delFeed = (req, res, cookie, callback) => {
    const queryString = `DELETE FROM feeds WHERE feed_url = '${req.body.feed_url}'`;

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

  let editFeed = (req, res, cookie, callback) => {
    dbPoolInstance.query(`SELECT id FROM users WHERE id = ${cookie}`, (error, queryResult) =>{
        let user = queryResult.rows[0].id;
        dbPoolInstance.query(`UPDATE feeds SET feed_url = '${req.body.feed_url}' WHERE user_id = ${cookie}`, (error, queryResult) =>{
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

  return {
    addFeed,
    delFeed,
    editFeed
  };
};