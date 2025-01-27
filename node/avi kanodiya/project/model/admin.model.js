const mongoose = require('mongoose')
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/amazonclone", { useNewUrlParse: true, useUnifiedTopology: true })
    .then(() => console.log("connection successful!!!!"))
    .catch((err) => console.log(err));

const adminSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    hash: { type: String, required: true },
    name: { type: String, required: true }
})

const Admin = mongoose.model('admin', adminSchema, 'admin')
module.exports = { Admin }