const express = require('express');
const employeeController = require('../../domain/employees');
const studentController = require('../../domain/students')
const router = express.Router();
const jwt = require('jsonwebtoken')
const ACCESS_TOKEN_SECRET = "4ec74b1ec64a925dc3b32e48ac6cff888eb810f3b58bb7cc53ede076c0732c594f5d19d14f1bed9e41b1a41d62bd355c846632f41ecb1a7c9d5323850d8eba02"
const authencticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

router.get('/employees', employeeController.employee_index)
router.get('/:id', employeeController.employee_id)
router.post('/employees', employeeController.employee_add)
router.put('/employees', employeeController.employee_mod)
router.delete('/employees', employeeController.employee_del)    
router.get('/employees/:id/child/assignments', employeeController.emp_assignment)
router.get('/employees/:id/child/assignments/:aid', employeeController.get_assignment)
router.put('/employees/:id/child/assignments/:aid', employeeController.update_assignment)
router.post('/students', authencticateToken, studentController.getStudents)
router.get('/students/:id', studentController.getStudentbyId)
router.get('/students/:id/fees', studentController.getFeesById)
router.get('/students/:id/result', studentController.getResult)
router.post('/login', studentController.login)
module.exports = router;