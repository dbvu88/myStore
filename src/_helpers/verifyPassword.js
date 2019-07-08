import bcrypt from 'bcrypt';

export default (password, hash) => new Promise(async (resolve, reject) => {
  try {
    const isCorrect = bcrypt.compare(password, hash);
    resolve(isCorrect);
  } catch (err) {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject();
  }
});
