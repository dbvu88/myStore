import express from 'express';
import Users from '../controllers/users.controller';

const usersRouter = express.Router();

/* GET users listing. */
usersRouter
  .get('/', (req, res, next) => {
    Users.get()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  });

export default usersRouter;
