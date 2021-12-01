const express = require("express")
const router = express.Router()
const { addProduct, addTv, getTv, getTvByCompany } = require('../domain/product.domain')

router.post('/addproduct', addProduct)
router.post('/addTv', addTv)
router.get('/gettv', getTv)
router.get('/gettv/:company', getTvByCompany)

module.exports = router;