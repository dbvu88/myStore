import express from 'express';

import withMiddleware from './_helpers/withMiddleware'
import withRoutes from './routes';

const app = express();


withMiddleware(app)

withRoutes(app)

module.exports = app;