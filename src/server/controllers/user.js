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

  return {
    login:login,
    signup:signup
  };
};