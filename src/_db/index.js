import mongoose from 'mongoose';

const username = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASS;
const cluster = process.env.MONGODB_CLUSTER;
const uri = `mongodb+srv://${username}:${password}@${cluster}`;

mongoose.connect(uri, { useCreateIndex: true, useNewUrlParser: true });
