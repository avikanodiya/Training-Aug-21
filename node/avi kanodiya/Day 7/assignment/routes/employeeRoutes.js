const express = require('express');
const employeeController = require('../middlewares/employeesController');
const router = express.Router();

router.get('/employees', employeeController.employee_index)
router.get('/:id', employeeController.employee_id)
router.post('/employees', employeeController.employee_add)
router.put('/employees', employeeController.employee_mod)
router.delete('/employees', employeeController.employee_del)
router.get('/employees/:id/child/assignments', employeeController.emp_assignment)
router.get('/employees/:id/child/assignments/:aid', employeeController.get_assignment)
router.put('/employees/:id/child/assignments/:aid', employeeController.update_assignment)
module.exports = router;
