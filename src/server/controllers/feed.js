const request = require('request');

module.exports = (db) => {

  let add = (req, res) => {
        let cookie = req.cookies.user;
        db.feeds.addFeed(req, res, cookie, (error, result, values) => {
            res.send(values)
        });
    };

  return {
    add:add,
  };
};