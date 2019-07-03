import express from 'express'
const UsersRouter = express.Router()

/* GET users listing. */
UsersRouter.get('/', (req, res, next) => {
  res.json([{
    name: "Duc"
  }])
})

module.exports = UsersRouter