import express from 'express'
const router = express.Router()

router
    .post('/register', (req, res, next) => {
        const user = req.body

        if (user) {
            res.send(user)

        }

        res.send('missing body')
    })
    .post('/login', (req, res, next) => {
        res.send('login')
    })

module.exports = router