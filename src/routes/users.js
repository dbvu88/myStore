import express from 'express';

const usersRouter = express.Router();

/* GET users listing. */
usersRouter.get('/', (req, res, next) => {
  res.json([{
    name: 'Duc',
  }]);
});

export default usersRouter;
