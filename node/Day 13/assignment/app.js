const express = require('express')
const app = express()

const doctor = require('./controller/doctor.controller')
const department = require('./controller/department.controller')
const medicine = require('./controller/medicine.controller')
const patient = require('./controller/patient.controller')
app.use(express.json())
app.use(
    express.urlencoded({ extended: true })
);
app.use('/doctor', doctor)
app.use('/department', department)
app.use('/medicine', medicine)
app.use('/patient', patient)
app.use('/assistant', assistant)
app.listen(3000, console.log('server running on 3000'))