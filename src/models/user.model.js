import { Schema } from 'mongoose';
import db from '../_db';

const userSchema = new Schema({
  username: { type: String, require: true, unique: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  lastname: { type: String, require: true },
  firstname: { type: String, require: true },
});

const Users = db.model('users', userSchema);


export default Users;
