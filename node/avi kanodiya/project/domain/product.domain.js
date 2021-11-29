const jwt = require("jsonwebtoken")
const config = require("../authorization/config.json")
const bcrypt = require('bcryptjs')
const db = require('../model/products.model')
const Product = db.Product;

const auth = async (req, res, next) => {
    const { username, password } = req.body
    console.log(username);
}

module.exports = { auth }