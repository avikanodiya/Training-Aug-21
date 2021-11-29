const mongoose = require('mongoose')
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/amazonclone", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection successful!!!!"))
    .catch((err) => console.log(err));

const mobileSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    specification: [
        {
            modelName: String,
            brand: String,
            memoryStorage: String,
            processor: String,
        }
    ]
});

const Product = mongoose.model('mobile&Accessories', mobileSchema, "mobile&Accessories")
module.exports = { Product }