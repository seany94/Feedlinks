const request = require('request');

module.exports = (db) => {

  let login = (req, res) => {
    // console.log(req.body.username)
    db.users.signin(req, res, (error, result, user) => {
        res.send(result)
      });
   }

  return {
    login:login
  };
};