export default (app) => {

  app.use('/', require('./views'));
  app.use('/users', require('./users'));
  app.use('/auth', require('./auth'));

}