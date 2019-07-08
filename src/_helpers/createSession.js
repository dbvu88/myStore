import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

export default (userId) => {
  const token = jwt.sign({
    sub: userId,
  }, secret, {
    expiresIn: process.env.JWT_SESSION,
  });

  // console.log(token);
  return token;
};
