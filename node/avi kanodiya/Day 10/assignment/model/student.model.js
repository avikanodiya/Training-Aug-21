const { string } = require('joi');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/nodetuts", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection successful!!!!"))
    .catch((err) => console.log(err));


const studentSchema = new mongoose.Schema({
    _id: Number,
    Name: { type: String, required: true },
    Address: { type: String, required: true },
    Fees: [
        {
            Amount: Number,
            PaymentDate: Date,
            Status: Boolean,
        },
    ],
    Result: [
        {
            Hindi: Number,
            Eng: Number,
            Math: Number,
            Total: Number,
            Grade: String,
        },
    ],
});

const User = mongoose.model('students', studentSchema, "students")
module.exports = { User }