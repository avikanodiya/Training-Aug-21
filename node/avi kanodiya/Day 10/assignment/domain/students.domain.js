const config = require('../authentication/config.json')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const db = require('../model/student.model')
const User = db.User;
const { validateStudent } = require('../validation/student.validation')

const authenticate = async ({ name, password }) => {
    var query = {};
    query[name] = name
    const d = await User.findOne({ query });
    console.log('inside auth');
    console.log(d);
    console.log(d.address);
    if (d && password === d.enrollmentno) {
        console.log(password);
        const token = jwt.sign({ sub: d.id }, config.secret, { expiresIn: '3d' })
        return {
            token
        };
    }
}

const auth = (req, res, next) => {
    console.log(req.body);
    authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or Password is incorrect' }))
        .catch(err => next(err))
}



const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    console.log(req.headers);
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(400)
    req.token = token
    next()
}

const createStudent = async (req, res) => {
    let data = req.body
    const { error } = validateStudent.validate(data)
    if (err) {
        res.json({
            message: 'validation error'
        })
    } else {
        const student = new User(data)
        try {
            const result = await student.save();
            res.send(result);
        } catch (e) {
            res.send(e.message);
        }
    }


}

const deleteStudent = async (req, res) => {
    let id = req.params.studentId;
    const student = await User.findByIdAndDelete(id);
    if (student) {
        res.send("Student Record Deleted Successfully");
    } else {
        res.status(404).send("Data Not Found");
    }
}

const getStudent = async (req, res) => {
    let id = req.params.id;
    console.log(req.params);
    const students = await User.findById(id);
    console.log(students);
    if (students) {
        res.send(students);
    } else {
        res.status(404).send("Data Not Found");
    }
}

const getFees = async (req, res) => {
    let id = req.params.id;
    //checking if record available
    const result = await User.findById(id);

    if (result) {
        res.send(result.Fees);
    } else {
        res.status(404).send("Data Not Found");
    }
}

module.exports = { authenticate, authenticateToken, createStudent, deleteStudent, getStudent, getFees, auth }