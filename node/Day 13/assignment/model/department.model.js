const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/hospital", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection successful!!!!"))
    .catch((err) => console.log(err));


const departmentSchema = new mongoose.Schema({
    _id: Number,
    name: { type: String, required: true }
});



const User = mongoose.model('department', departmentSchema, "department")
module.exports = { User }