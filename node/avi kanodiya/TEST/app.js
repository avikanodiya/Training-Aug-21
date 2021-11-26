const express = require('express')
const app = express();
const bodyParser = require('body-parser')
app.use(express.json())
const controller = require('./controller/employee.controller')

app.use('/', controller)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.listen(3001, () => {
    console.log('server starting on 3000');
})
