const jwt = require("jsonwebtoken")
const config = require("../authorization/config.json")
const bcrypt = require('bcryptjs')
const db = require('../model/products.model')
const Product = db.Product;
const Tv = db.Tv;
const { Admin } = require('../model/admin.model')
const { productValidate, tvValidate } = require('../validation/validation')

const reg = async (req, res, next) => {
    const { username, password, name } = req.body
    const admin = new Admin(req.body)
    if (password) {
        admin.hash = bcrypt.hashSync(password, 10);
    }
    await admin.save()
    res.json({ message: 'admin registered' })
}

const logg = async (req, res, next) => {
    const { username, password } = req.body
    const admin = await Admin.findOne({ username: username })
    console.log(admin);
    if (admin && bcrypt.compareSync(password, admin.hash)) {
        console.log(password);
        const token = jwt.sign({ sub: admin.id }, config.secret, { expiresIn: '3d' })
        res.json({
            ...admin.toJSON(), token
        })
    }
}

const addProduct = async (req, res, next) => {
    const data = req.body
    const { error } = productValidate.validate(data)
    console.log(error);
    if (error) {
        res.json({
            message: 'not a valid data'
        })
    } else {
        const product = new Product(data)
        await product.save()
        res.json({
            message: 'product added'
        })
    }
}

const addTv = async (req, res, next) => {
    const data = req.body
    const { error } = tvValidate.validate(data)
    console.log(error);
    if (error) {
        res.json({
            message: 'not a valid data'
        })
    } else {
        const tv = await new Tv(data)
        await tv.save()
        res.json({
            message: 'product added successfuly'
        })
    }
}

const getTv = async (req, res, next) => {
    const tv = await Tv.find()
    console.log(tv);
    res.send(tv)
}

const getTvByCompany = async (req, res, next) => {
    const comp = req.params.company
    console.log(comp);
}

module.exports = { reg, logg, addProduct, addTv, getTv, getTvByCompany }