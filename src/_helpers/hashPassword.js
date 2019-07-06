import bcrypt from 'bcrypt';

require('dotenv').config();

const saltRounds = process.env.SALT_ROUNDS;

export default (password) => {
  const hash = bcrypt
    .hash(
      password,
      parseInt(saltRounds, 10),
    )
    .then(data => data)
    .catch((err) => { throw err; });

  return hash;
};
