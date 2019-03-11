const request = require('request');

module.exports = (db) => {

    let login = (req, res) => {
    // console.log(req.body.username)
        db.users.signin(req, res, (error, result) => {
            res.send(result)
        });
    }

    let signup = (req, res) => {
        db.users.register(req, res, (error, result, values) => {
            res.send(values)
        });
    };

    let info = (req, res) => {
        let cookie = req.cookies.user;
        db.users.userFind(cookie, (error, result, values) => {
            res.send(result)
        });
    };

    let feed = (req, res) => {
        let cookie = req.cookies.user;
        db.users.userFeed(cookie, (error, result, values) => {
            res.send(result)
        });
    };

    let category = (req, res) => {
        let cookie = req.cookies.user;
        db.users.userCategory(cookie, (error, result, values) => {
            res.send(result)
        });
    };

    let feedCount = (req, res) => {
        let cookie = req.cookies.user;
        db.users.userFeedCount(cookie, (error, result, values) => {
            res.send(result)
        });
    };

  return {
    login:login,
    signup:signup,
    info:info,
    feed:feed,
    category:category,
    feedCount:feedCount
  };
};