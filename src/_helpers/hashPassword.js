import bcrypt from 'bcrypt';

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

export const hashPassword = (password, callback) => {
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
