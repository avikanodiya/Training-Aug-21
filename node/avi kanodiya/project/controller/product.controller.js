const express = require("express")
const router = express.Router()
const { addMobile, addTv, addOrder, getOrder, getCategory, subCategory, addProduct, getTvByCompany } = require('../domain/product.domain')

router.post('/addproduct', addProduct)
router.post('/addorder', addOrder)
router.get('/getorder', getOrder)
router.get('/getcategory/:category', getCategory)
router.get('/getsubcategory/:subCategory', subCategory)
router.get('/getbycompany/:company', getTvByCompany)

module.exports = router;