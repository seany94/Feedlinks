module.exports = (app, db) => {
  const user = require('./controllers/user')(db);
  const feeds = require('./controllers/feed')(db);

  app.post('/user/login', user.login);
  app.post('/user/signup', user.signup);
  app.get('/user/:id', user.info);
  app.get('/user/:id/feed', user.feed);
  app.get('/user/:id/category', user.category);
};