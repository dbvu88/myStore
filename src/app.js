import express from 'express';
import path from 'path';

import {
  withMiddleware,
} from './_helpers';
import withRoutes from './routes';

require('dotenv').config();

const { MongoClient } = require('mongodb');

const username = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASS;
const cluster = process.env.MONGODB_CLUSTER;
const uri = `mongodb+srv://${username}:${password}@${cluster}`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
});

client.connect((err) => {
  if (err) {
    console.log('failed to connect to db');
    return;
  }

  const collection = client.db('test').collection('devices');
  // perform actions on the collection object

  console.log('successfully connected to mongodb');
  client.close();
});

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({
  extended: false,
}));


withMiddleware(app);

withRoutes(app);

module.exports = app;

console.log('server ready');
