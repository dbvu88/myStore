import cookieParser from 'cookie-parser';
import logger from 'morgan';
export default (app) => {

    app.use(logger('dev'));

    app.use(cookieParser());
}