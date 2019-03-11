const request = require('request');

module.exports = (db) => {

    let add = (req, res) => {
        let cookie = req.cookies.user;
        db.feeds.addFeed(req, res, cookie, (error, result, values) => {
            res.send(values)
        });
    };

    let del = (req, res) => {
        let cookie = req.cookies.user;
        db.feeds.delFeed(req, res, cookie, (error, result) => {
            res.send(result)
        });
    };

    let edit = (req, res) => {
        let cookie = req.cookies.user;
        db.feeds.editFeed(req, res, cookie, (error, result) => {
            res.send(result)
        });
    };

  return {
    add:add,
    del:del,
    edit:edit
  };
};