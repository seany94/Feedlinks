module.exports = (app, db) => {
  const pokemon = require('./controllers/pokemon')(db);
  const query = require('./controllers/query')(db);

  app.get('/query', query.get);
  app.get('/pokemon/:id', pokemon.get);

  app.get('/api/pokemon/:id', pokemon.apiget);
};
