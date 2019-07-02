export default (app) => {

  const userRouter = (router) => {
    app.use(router, require(`./${router}`))
  }

  app.use('/', require('./views'));
  userRouter('users')
}