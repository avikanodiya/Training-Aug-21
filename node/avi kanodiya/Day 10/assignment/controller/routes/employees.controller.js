const express = require('express')
const { getAllEmployees, createEmployee, deleteEmployee } = require('../../domain/employee.domain')
const router = express.Router();
const { verify } = require('../../authentication/jwt');


router.get('/', getAllEmployees)
router.post('/', createEmployee)
router.delete('/:id', deleteEmployee)

module.exports = router;