import express from 'express'
const router = express.Router()

router
    .post('/register', (req, res, next) => {
        res.send('register')
    })
    .post('/login', (req, res, next) => {
        res.send('login')
    })

module.exports = router