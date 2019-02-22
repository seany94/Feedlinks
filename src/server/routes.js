module.exports = (app, db) => {
  const feed = require('./controllers/feed')(db);
  const query = require('./controllers/query')(db);

  app.get('/query', query.get);
};