const express = require('express')
const router = express.Router()
const { insertDepartment, deleteDepartment } = require('../domain/department.domain')

router.post('/', insertDepartment)
router.delete('/:dId', deleteDepartment)

module.exports = router;