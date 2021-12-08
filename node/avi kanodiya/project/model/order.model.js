const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { Product } = require('./products.model')
const { User } = require('./users.model')

mongoose.connect("mongodb://localhost:27017/amazonclone", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('connection successful'); })
    .catch((err) => console.log(err))


const orderSchema = new Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    order: {

        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Product
        }
    },
    date: { type: Date }
})

const Order = mongoose.model('orders', orderSchema, 'orders')

module.exports = { Order }