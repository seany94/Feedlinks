module.exports = (app, db) => {
  const user = require('./controllers/user')(db);
  const feed = require('./controllers/feed')(db);
  const query = require('./controllers/query')(db);

  app.get('/query', query.get);
  app.post('/user', user.login);
};