import cookieParser from 'cookie-parser';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

export default (app) => {
  app.use(logger('dev'));
  app.use(cookieParser());
  app.use(helmet());
  app.use(cors());
};
