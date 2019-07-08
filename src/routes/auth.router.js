import express from 'express';
import Auth from '../controllers/auth.controller';

const router = express.Router();
const login = async (req, res, next) => {
  const { username, password } = req.body;
  if (username && password) {
    await Auth
      .login(username, password)
      .then(data => res.json(data))
      .catch(err => res.status(401).json(err));
  }
  res
    .status(404)
    .json({ errmsg: 'username and password are required' });
};

const register = (req, res, next) => Auth.register(req.body)
  .then((data) => { res.json(data); })
  .catch((err) => {
    // eslint-disable-next-line no-param-reassign
    err.status = 404;
    next(err);
  });


router
  .post('/register', register)
  .post('/login', login);

export default router;
