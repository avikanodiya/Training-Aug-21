const express = require('express')
const router = express.Router();
const { forgotPassword, getById } = require('../domain/users.domain')

// const getAll = (req, res, next) => {
//     console.log('hi');
//     getById(id)
//         .then(users => res.json(users))
//         .catch(err => next(err))
// }

// router.post('/getall', getAll)

router.post('/forgotpassword', forgotPassword)
module.exports = router;