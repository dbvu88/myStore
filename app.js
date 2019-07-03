import express from 'express';
import path from 'path';

import withMiddleware from './_helpers/withMiddleware'
import withRoutes from './routes';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));


withMiddleware(app)

withRoutes(app)

module.exports = app;