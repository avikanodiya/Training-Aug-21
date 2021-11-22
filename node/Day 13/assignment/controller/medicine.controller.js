const express = require('express')
const router = express.Router()
const { getAllMedicine, getMedicine, insertMedicine } = require('../domain/medicine.domain')

router.get('/', getAllMedicine)
router.get('/:mId', getMedicine)
router.post('/', insertMedicine)

module.exports = router;
