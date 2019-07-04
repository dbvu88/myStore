import cookieParser from 'cookie-parser';
import logger from 'morgan';

export const withMiddleware = (app) => {
  app.use(logger('dev'));

  app.use(cookieParser());
};
