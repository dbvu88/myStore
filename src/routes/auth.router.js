import express from 'express';
import Auth from '../controllers/auth.controller';

const router = express.Router();
const register = async (req, res, next) => {
  try {
    const data = await Auth.register(req.body);
    res.json(data);
  } catch (err) {
    res.json(err);
  }
};

router
  .post('/register', register)
  .post('/login', (req, res) => {
    res.send('login');
  });

export default router;
