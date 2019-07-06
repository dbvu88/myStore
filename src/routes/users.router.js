import express from 'express';
import Users from '../controllers/users.controller';

const usersRouter = express.Router();

const get = async (req, res, next) => {
  try {
    const data = await Users.get();
    res.json(data);
  } catch (err) {
    res.json(err);
  }
};

usersRouter
  .get('/', get);

export default usersRouter;
