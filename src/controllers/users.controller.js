import 'regenerator-runtime';
import User from '../models/user.model';

const get = async () => {
  const data = await User.find().select('-password');
  return data;
};

export default {
  get,
};
