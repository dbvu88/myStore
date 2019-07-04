import {
    hashPassword
} from '../_helpers/'

const register = (req, res, next) => {
    if (req.body && req.body.password) {
        hashPassword(req.body.password, (err, hash) => {
            if (err) res.send(err)
            res.send(hash)
        })
    } else {
        res.send('bad request')
    }
}

export default {
    register
}