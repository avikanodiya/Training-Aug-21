const mongoose = require('mongoose')
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/demo", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection successful!!!!"))
    .catch((err) => console.log(err));


const employeeSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true }
})

const Employee = mongoose.model('employees', employeeSchema, "employees")
module.exports = { Employee }