import jwt from 'jsonwebtoken';

require('dotenv').config();

export default async (user) => {
  const token = jwt.sign({
    sub: user.id,
  },
  process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_SESSION,
  });

  console.log(token);
  return token;
};
