const db = require('../model/db')
const Employee = db.Employee
const { EmployeeValidation } = require('../validation/employee.validation')

const Register = async (req, res, next) => {
    const data = req.body
    console.log(data);
    try {
        for (let i in data) {
            const result = data[i]
            console.log(result);
            const { error } = EmployeeValidation.validate(data[i])
            if (error) {
                res.json({ message: 'validation error', data: result })
            } else {
                const employee = new Employee(data[i])
                await employee.save()
                res.json({
                    message: 'data saved successfully'
                })
            }

        }
    }
    catch (err) {
        res.send(err.message)
    }

}

const modify = async (req, res, next) => {
    const data = req.body
    console.log(data);
    try {
        for (let i in data) {
            const result = data[i]
            const { error } = EmployeeValidation.validate(result)
            if (error) {
                res.json({
                    message: 'validation error',
                    data: result
                })
            } else {
                const emp = await Employee.updateOne({ id: result.id }, {
                    $set: {
                        name: result.name,
                        address: result.address
                    }
                })
            }
        }
    }
    catch (err) {
        res.send(err.message)
    }
}

const deleteData = async (req, res, next) => {
    const data = req.body
    try {
        for (let i in data) {
            const result = data[i]
            const emp = await Employee.findOneAndDelete({ id: result.id })

        }
        res.json({ message: 'data deleted successfully' })
    }
    catch (err) {
        res.json(err.message)
    }
}

const getData = async (req, res, next) => {
    const emp = await Employee.find()
    res.send(emp)
}

module.exports = { Register, modify, deleteData, getData }