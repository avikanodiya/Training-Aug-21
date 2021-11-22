const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
const studentController = require('./controller/routes/student.controller')
const employeeController = require('./controller/routes/employees.controller')
const { auth } = require('./domain/students.domain')
const { authenticate } = require('./domain/employee.domain')
const verifytoken = require('./authentication/verifytoken')
const router = express.Router();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use('/auth', authenticate)
router.post('/authenticate', auth)


app.use(verifytoken)
app.use('/employees', employeeController)
app.use('/', studentController)
app.listen(3030, console.log('server is running on port 3000'))