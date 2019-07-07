import jwt from 'jsonwebtoken';

require('dotenv').config();

export default async (userId) => {
  const token = jwt.sign({
    sub: userId,
  },
  process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_SESSION,
  });

  console.log(token);
  return token;
};
