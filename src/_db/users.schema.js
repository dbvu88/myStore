import { Schema } from 'mongoose';

const userSchema = new Schema({
  username: { type: String, require: true, unique: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  lastname: { type: String, require: true },
  firstname: { type: String, require: true },
});
export default userSchema;

// Users.
