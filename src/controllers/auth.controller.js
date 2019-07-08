import _helpers from '../_helpers';
import User from '../models/user.model';

const login = async (username, password) => {
  await _helpers.getHash(password)
    .then(async (hash) => {
      console.log(hash);
      const user = await User
        .find({ username, password: hash })
        .select('-password');
      console.log(user);
    })
    .then((user) => {
      console.log(user);
    })
    .catch((err) => {
      throw err;
    });
};

const register = user => new Promise(async (resolve, reject) => {
  const { password, ...userInfo } = user;
  if (!password) {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject({ msg: 'Must Enter a Password' });
  }
  try {
    const hash = await _helpers.getHash(password);
    const {
      _id: id,
      firstname,
      lastname,
      username,
    } = await new User({
      password: hash,
      ...userInfo,
    }).save();

    const token = await _helpers.createSession(id);

    resolve({
      token,
      firstname,
      lastname,
      username,
    });
  } catch (err) {
    reject(err || { msg: 'Registration Failed' });
  }
});

export default {
  register,
  login,
};
