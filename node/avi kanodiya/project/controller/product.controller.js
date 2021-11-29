const express = require("express")
const router = express.Router()
const { auth } = require('../domain/product.domain')

router.post('/login', auth)
module.exports = router;