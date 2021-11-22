const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')

const authenticate = (req, res, next) => {
    auth.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or Password is incorrect' }))
        .catch(err => next(err))
}

const register = (req, res, next) => {
    console.log('inside register');
    auth.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err))
}

const getAll = (req, res, next) => {
    console.log('hi');
    auth.getById(id)
        .then(users => res.json(users))
        .catch(err => next(err))
}



router.post('/register', register)
router.post('/getall', getAll)
router.post('forgotpassword', auth.forgotPassword)
module.exports = router;