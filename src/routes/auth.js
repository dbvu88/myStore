import express from 'express';
import Auth from '../controllers/auth.controller';

const router = express.Router();

router
  .post('/register', (req, res, next) => Auth.register(req, res, next))
  .post('/login', (req, res) => {
    res.send('login');
  });

export default router;
