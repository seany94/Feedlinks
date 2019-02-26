const request = require('request');

module.exports = (db) => {

  let addCat = (req, res) => {
        let cookie = req.cookies.user;
        db.categories.addCategory(req, res, cookie, (error, result, values) => {
            res.send(values)
        });
    };

  return {
    addCat:addCat,
  };
};