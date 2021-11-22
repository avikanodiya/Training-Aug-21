const config = require('../authentication/config.json')
const jwt = require('jsonwebtoken')
const db = require('../model/employee.model')
const Emp = db.User;

const authenticate = (req, res, next) => {
    console.log(req.body);
    auth(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or Password is incorrect' }))
        .catch(err => next(err))
}

const auth = async ({ FirstName, password }) => {
    console.log('inside auth');
    var query = {};
    query[FirstName] = FirstName
    const d = await Emp.findOne({ query });
    if (d) {
        if (d && password === d.enrollmentno) {
            console.log(password);
            const token = jwt.sign({ sub: d.id }, config.secret, { expiresIn: '3d' })
            return {
                token
            };
        }
    } else {
        if (FirstName == "admin" && password == "admin") {
            console.log('admin');
            const token = jwt.sign({ sub: "admin" }, config.secret, { expiresIn: '3d' })
            return {
                token
            };
        }
    }

    // console.log('inside auth');
    // console.log(d);
    // console.log(d.address);

}

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    console.log(req.headers);
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(400)
    req.token = token
    next()
}

const getAllEmployees = async (req, res, next) => {
    const employees = await Emp.find()
    res.send(employees)
}

const createEmployee = async (req, res, next) => {
    let data = req.body;
    const employee = new Emp(data);
    try {
        const result = await employee.save();
        res.send(result);
    } catch (e) {
        res.send(e.message);
    }
}

const deleteEmployee = async (req, res, next) => {
    let id = req.params.id;
    const employees = await Emp.findByIdAndDelete(id);
    if (employees) {
        res.send("Employee Record Deleted Successfully");
    } else {
        res.status(404).send("Data Not Found");
    }
}

module.exports = { authenticate, getAllEmployees, createEmployee, deleteEmployee}