import express from 'express'
const UsersRouter = express.Router()

/* GET users listing. */
UsersRouter.get('/', (req, res, next) => {
  res.send('respond with a resource')
})

module.exports = UsersRouter