import express from 'express';
import authController from '../controllers/auth.controller';

const router = express.Router();

router
  .post('/register', (req, res, next) => authController.register(req, res, next))
  .post('/login', (req, res) => {
    res.send('login');
  });

export default router;
