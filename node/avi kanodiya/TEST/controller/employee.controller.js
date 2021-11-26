const express = require('express')
const router = express.Router();
const { Register, modify, deleteData, getData } = require('../domain/employee.domain')

router.post('/register', Register)
router.post('/edit', modify)
router.delete('/delete', deleteData)
router.get('/employees', getData)

module.exports = router;
