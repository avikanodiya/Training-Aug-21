const joi = require('joi');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/demo", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection successful!!!!"))
    .catch((err) => console.log(err));


const schema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,

    }
})

const User = mongoose.model('User', schema, "User")
module.exports = { User }