const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const jwt = require('./authorization/jwt')
const errorHandler = require('./middleware/errorHandler')
const controlller = require('./controller/controller.js')
const { auth } = require('./domain/domain')
const verifytoken = require('./authorization/verifytoken')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(jwt())
router.post('/authenticate', auth)
app.use(verifytoken)
app.use('/users', controlller)
app.use(errorHandler)

app.listen(3000, console.log('server is running on port 3000'))