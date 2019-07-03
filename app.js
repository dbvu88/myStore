import express from 'express';
import path from 'path';

import withMiddleware from './_helpers/withMiddleware'
import withRoutes from './routes';


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ducvu:b3stAdminH3r3@cluster0-yftd6.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true
});
client.connect(err => {
    if (err) {
        // console.log('failed to connect to db')
        return;
    }

    const collection = client.db("test").collection("devices");
    // perform actions on the collection object


    client.close();
});

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));


withMiddleware(app)

withRoutes(app)

module.exports = app;