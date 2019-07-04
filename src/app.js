import express from 'express';

import _helpers from './_helpers';
import withRoutes from './routes';

require('dotenv').config();

const app = express();

_helpers.withMiddleware(app, express);

withRoutes(app);

module.exports = app;

console.log('server ready');
