const mongoose = require('mongoose')
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/hospital", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection successful!!!!"))
    .catch((err) => console.log(err));


const patientSchema = new mongoose.Schema({
    _id: Number,
    name: { type: String, required: true },
    department: {
        type: Number,
        ref: "department",
        required: true,
    },
    medicines: [
        {
            medicine: {
                type: Number,
                ref: "medicine",
            },
            doses: [{ type: String, enum: ["morning", "afternoon", "night"] }],
        },
    ],
});
const User = mongoose.model('patient', patientSchema, "patient")
module.exports = { User }