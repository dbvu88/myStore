
import getHash from '../_helpers/getHash';
import Users from '../models/user.model';

const register = async ({ password, ...userInfo }) => {
  try {
    const result = await getHash(password);

    const {
      _id: id,
      firstname,
      lastname,
      username,
    } = await Users.create({
      password: result, ...userInfo,
    });
    return {
      id,
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
