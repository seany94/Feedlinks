const request = require('request');

module.exports = (db) => {

  let login = (req, res) => {
    console.log(req.body.username)
    console.log(req.body.password)
    res.redirect('/')
   }

  return {
    login:login
  };
};