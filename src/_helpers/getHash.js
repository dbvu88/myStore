import bcrypt from 'bcrypt';

const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);

export default password => new Promise(async (resolve, reject) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    // const salt = null; // for debug use only;
    const result = bcrypt.hash(password.toString(), salt);
    resolve(result);
  } catch (err) {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject();
  }
});
