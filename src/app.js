require('dotenv').config()
import express from 'express';
import path from 'path';

import withMiddleware from './_helpers/withMiddleware'
import withRoutes from './routes';


const MongoClient = require('mongodb').MongoClient,
    username = process.env.MONGODB_USER,
    password = process.env.MONGODB_PASS,
    cluster = process.env.MONGODB_CLUSTER,
    uri = `mongodb+srv://${username}:${password}@${cluster}`,
    client = new MongoClient(uri, {
        useNewUrlParser: true
    });

client.connect(err => {
    if (err) {
        console.log('failed to connect to db')
        return;
    }

    const collection = client.db("test").collection("devices");
    // perform actions on the collection object

    console.log('successfully connected to mongodb')
    client.close();
});

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));


withMiddleware(app)

withRoutes(app)

module.exports = app;