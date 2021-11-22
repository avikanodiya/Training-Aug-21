const mongoose = require('mongoose')
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/hospital", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection successful!!!!"))
    .catch((err) => console.log(err));


const assistantSchema = new mongoose.Schema({
    _id: Number,
    name: { type: String, required: true },
    patients: [
        {
            type: Number,
            ref: "patient",
        },
    ],
});

const User = mongoose.model('assistant', assistantSchema, "assistant")
module.exports = { User }