import express from 'express';

import _helpers from './_helpers';
import withRoutes from './routes';
// import './_db';


const app = express();

_helpers.applyMiddleware(app, express);

withRoutes(app);

module.exports = app;

console.log('server ready');
