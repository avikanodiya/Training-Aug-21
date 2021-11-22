const { string } = require('joi');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/nodetuts", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection successful!!!!"))
    .catch((err) => console.log(err));


const employeeSchema = new mongoose.Schema({
    _id: Number,
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    PhoneNumber: { type: Number, required: true },
    Assignments: [
        {
            _id: Number,
            AssignmentCategory: String,
            AssignmentName: String,
            AssignmentStatus: String,
        },
    ],
});

const User = mongoose.model('employees', employeeSchema, "employees")
module.exports = { User }