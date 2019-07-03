import express from 'express';
const ViewsRouter = express.Router();


/* GET home page. */
ViewsRouter.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Express'
    });
});

module.exports = ViewsRouter