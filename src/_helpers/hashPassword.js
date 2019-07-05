import bcrypt from 'bcrypt';

require('dotenv').config();

const saltRounds = process.env.SALT_ROUNDS;

export default (password, callback) => {
  console.log('password hashing');

  return bcrypt.hash(
    password,
    saltRounds,
    (err, hash) => {
      if (err) callback(err);
      else callback(hash);
    },
  );
};
