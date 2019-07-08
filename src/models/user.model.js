import { Schema } from 'mongoose';
import db from '../_db';

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 4,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  lastname: { type: String, required: true },
  firstname: { type: String, required: true },
});

const Users = db.model('users', userSchema);


export default Users;
