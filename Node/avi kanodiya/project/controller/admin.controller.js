const express = require('express')
const router = express.Router()
const { addCategory, addSubcategory } = require('../domain/admin.domain')

router.post('/addcategory', addCategory)
router.post('/addsubcategory', addSubcategory)

module.exports = router;