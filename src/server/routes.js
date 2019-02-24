module.exports = (app, db) => {
  const user = require('./controllers/user')(db);
  const feeds = require('./controllers/feed')(db);
  const query = require('./controllers/query')(db);

  app.get('/query', query.get);
  app.post('/user/login', user.login);
  app.post('/user/signup', user.signup);
};