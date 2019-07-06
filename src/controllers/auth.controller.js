import bcrypt from 'bcrypt';

import hashPassword from '../_helpers/hashPassword';

const register = async (user) => {
  const { password, ...userInfo } = user;

  if (password) {
    const hash = await hashPassword(password);
    return (userInfo);
  }
  throw new Error('bad request!!!');
};
export default {
  register,
};
