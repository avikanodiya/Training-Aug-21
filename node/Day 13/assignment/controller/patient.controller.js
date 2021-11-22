const express = require('express')
const router = express.Router()
const { getAllPatients, getPatient, insertPatient } = require('../domain/patient.domain')

router.get('/', getAllPatients)
router.get('/:pId', getPatient)
router.post('/', insertPatient)

module.exports = router;