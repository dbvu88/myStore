import views from './views';
import users from './users';
import auth from './auth';

export default (app) => {
  app.use('/', views);
  app.use('/users', users);
  app.use('/auth', auth);
};
