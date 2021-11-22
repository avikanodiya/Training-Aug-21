var express = require("express")
var app = express()
app.use(express.json())
var router = express.Router()


app.listen(3000, console.log("server running on port 3000!!!!"))

const routes = require('./routes/Routes')
app.use('/', routes)