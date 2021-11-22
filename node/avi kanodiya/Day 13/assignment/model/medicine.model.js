const mongoose = require('mongoose')
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/hospital", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection successful!!!!"))
    .catch((err) => console.log(err));


const medicineSchema = new mongoose.Schema({
    _id: Number,
    name: { type: String, required: true }
});

const User = mongoose.model('medicine', medicineSchema, "medicine")
module.exports = { User }