const express = require("express")
const router = express.Router()
const { addMobile, addTv, getTv, getTvByCompany, getMobile, addOrder, getOrder, getMobileByCompany } = require('../domain/product.domain')

router.post('/addmobile', addMobile)
router.post('/addTv', addTv)
router.get('/getmobile', getMobile)
router.get('/gettv', getTv)
router.get('/gettv/:company', getTvByCompany)
router.get('/getmobile/:company', getMobileByCompany)
router.post('/addorder', addOrder)
router.get('/getorder', getOrder)

module.exports = router;