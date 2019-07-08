import express from 'express';
import path from 'path';

import _helpers from './_helpers';
import withRoutes from './routes';
// import './_db';

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
_helpers.applyMiddleware(app, express);

withRoutes(app);

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json(err || { message: 'something went wrong' });
});

module.exports = app;

console.log('server ready');
