module.exports = (app, db) => {
  const user = require('./controllers/user')(db);
  const feed = require('./controllers/feed')(db);
  const category = require('./controllers/category')(db);

  app.post('/user/login', user.login);
  app.post('/user/signup', user.signup);
  app.get('/user/:id', user.info);
  app.get('/user/:id/feed', user.feed);
  app.get('/user/:id/category', user.category);

  app.post('/feed/add', feed.add);

  app.post('/category/add', category.addCat);

};