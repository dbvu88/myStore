
import views from './views.router';
import users from './users.router';
import auth from './auth.router';

export default (app) => {
  app.use('/', views);
  app.use('/users', users);
  app.use('/auth', auth);
};
