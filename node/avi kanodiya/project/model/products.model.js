const mongoose = require('mongoose')
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/amazonclone", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection successful!!!!"))
    .catch((err) => console.log(err));

const mobileSchema = new Schema({
    company: { type: String, required: true },
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
    specification:
    {
        modelName: String,
        brand: String,
        Storage: String,
        processor: String,
    }

});

const tvSchema = new Schema({
    company: { type: String, required: true },
    name: { type: String, required: true },
    size: { type: String, required: true },
    patternName: { type: String, required: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
    specification: {
        screenSize: { type: String, required: true },
        supportedServices: { type: String, required: true },
        connectorType: { type: String, required: true },
        Brand: { type: String, required: true },
        Resolution: { type: String, required: true },
        displayTech: { type: String, required: true },
        modelYear: { type: Number, required: true }
    }
})

const Product = mongoose.model('mobile', mobileSchema, "mobile")
const Tv = mongoose.model('televisions', tvSchema, 'televisions')
module.exports = { Product, Tv }