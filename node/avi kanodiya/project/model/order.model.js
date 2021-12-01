const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { Mobile, Tv } = require('./products.model')
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
        mobile: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Mobile
        },
        tv: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Tv
        }
    },
    date: { type: Date }
})

const Order = mongoose.model('orders', orderSchema, 'orders')

module.exports = { Order }