import _helpers from '../_helpers';
import Users from '../models/user.model';
import 'regenerator-runtime';


const register = async ({ password, ...userInfo }) => {
  try {
    const result = await _helpers.getHash(password);

    const user = await Users.create({
      password: result,
      ...userInfo,
    });
    const {
      _id: id,
      firstname,
      lastname,
      username,
    } = user;

    const token = await _helpers.getToken(id);
    return {
      token,
      firstname,
      lastname,
      username,
    };
  } catch (err) {
    throw err;
  }
};
export default {
  register,
};
