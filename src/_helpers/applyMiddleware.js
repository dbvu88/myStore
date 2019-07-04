import cookieParser from 'cookie-parser';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import path from 'path';


export default (app, express) => {
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(express.json());
  app.use(express.urlencoded({
    extended: false,
  }));
  app.use(logger('dev'));
  app.use(cookieParser());
  app.use(helmet());
  app.use(cors());
};
