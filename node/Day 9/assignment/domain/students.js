const jwt = require('jsonwebtoken')
const ACCESS_TOKEN_SECRET = "4ec74b1ec64a925dc3b32e48ac6cff888eb810f3b58bb7cc53ede076c0732c594f5d19d14f1bed9e41b1a41d62bd355c846632f41ecb1a7c9d5323850d8eba02"
const Students = require('../model/students.json')

console.log(Students);
const getStudents = (req, res) => {
    res.send(Students)
}

const getStudentbyId = (req, res) => {
    const student = Students.find(d => d.ID === parseInt(req.params.id))
    if (!student) res.status(404).send("<h2>404 ERROR!!!</h2>")
    res.send(student)
    console.log(req.params.id);
    console.log(Students[0]);
    console.log(student);
}

const getFeesById = (req, res) => {
    const student = Students.find(d => d.ID === parseInt(req.params.id))
    if (!student) res.status(404).send("<h2>404 ERROR!!!</h2>")
    res.send(student.Fees)
}

const getResult = (req, res) => {
    const student = Students.find(d => d.ID === parseInt(req.params.id))
    if (!student) res.status(404).send("<h2>404 ERROR!!!</h2>")
    res.send(student.Result)
}
//authorization folder/token verify
const login = (req, res) => {
    console.log('in login');
    const name = req.body.Name
    const student = Students.find(d => d.Name === parseInt(req.params.id))
    console.log(student);
    const user = { name: name }
    const accessToken = jwt.sign(user, ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken })
}

module.exports = { getResult, getFeesById, getStudentbyId, getStudents, login }


