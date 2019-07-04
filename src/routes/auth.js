import express from 'express'
const router = express.Router()
import hashPassword from '../_helpers/'
import authController from '../controllers/auth.controller'

router
    .post('/register', (req, res, next) => authController.register(req, res, next))
    .post('/login', (req, res, next) => {
        res.send('login')
    })

module.exports = router