const express = require('express')
const router = express.Router();
const { authenticate, authenticateToken, createStudent, deleteStudent, getStudent, getFees } = require('../../domain/students.domain')
const { verify } = require('../../authentication/jwt')
const db = require('../../model/student.model')
const User = db.User;



router.post('/students', authenticateToken, async (req, res, next) => {
    try {
        if (verify(req.token)) {

            res.json("authorized")
        } else {
            res.json({
                message: "invalid token"

            })
        }
    }
    catch (err) {
        res.json({
            message: err.message
        })
    }
})
router.post('/newstudent', createStudent)
router.post('/deletestudent', deleteStudent)
router.get('/getstudent/:id', getStudent)
router.get('/Fees/:id', getFees)
module.exports = router;