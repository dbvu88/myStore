import mongoose from 'mongoose';
import userSchema from './users.schema';

require('dotenv').config();


const username = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASS;
const cluster = process.env.MONGODB_CLUSTER;
const options = { useCreateIndex: true, useNewUrlParser: true };
const uri = `mongodb+srv://${username}:${password}@${cluster}`;

// db.connect(uri, options);

const db = mongoose.createConnection(uri, options);
db.dropCollection('users', (err) => {
  if (err) console.log(err.errmsg);
  console.log('successfully dropped a collection');
});

const Users = db.model('users', userSchema);

Users.create({
  username: 'user',
  email: 'user@mail.com',
  password: 'user',
  lastname: 'user',
  firstname: 'normal',
}, (err, newUser) => {
  if (err) console.log(err);
  else console.log(newUser);
});


// db.connection
//   .on('error', console.error.bind(console, 'connection error:'))
//   .once('open', async () => {
//     console.log('db connected');

//     try {
//       console.log('deleting collection');
//       await db.deleteModel(/.+/);
//     } catch (err) {
//       console.log('error: ', err);
//     }
// });
export default db;
