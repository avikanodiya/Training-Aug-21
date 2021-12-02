const express = require('express')
const router = express.Router();
const { forgotPassword, getById } = require('../domain/users.domain')

router.post('/forgotpassword', forgotPassword)
module.exports = router;