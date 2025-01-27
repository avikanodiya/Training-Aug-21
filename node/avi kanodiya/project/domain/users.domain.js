const jwt = require('jsonwebtoken')
const config = require('../authorization/config.json')
const bcrypt = require('bcryptjs')
const db = require('../model/users.model');
const { validateUser, authValidate } = require('../validation/validation');
const User = db.User;
const { Order } = require('../model/order.model')
const authenticate = async ({ email, password }) => {
    // var query = {};
    // query[email] = email
    const user = await User.findOne({ email: email });
    console.log('inside auth');
    console.log(user);
    console.log(`hi ${user.email}`);
    if (user && bcrypt.compareSync(password, user.hash)) {
        console.log(password);
        const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '3d' })
        return {
            ...user.toJSON(), token
        };
    }
}

const auth = (req, res, next) => {
    console.log('inside auth');
    console.log(req.body);
    authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or Password is incorrect' }))
        .catch(err => res.json(err))
}

const getById = async (id) => {
    const user = await User.findById(id)
    console.log(user);
    return user
}

const register = async (req, res, next) => {
    console.log('inside register');
    const data = req.body
    const { error } = validateUser.validate(data)
    if (error) {
        console.log('validation error');
        res.json({
            message: 'not a validate input'
        })
    }
    else {
        if (await User.findOne({ username: data.username })) {
            console.log('inside else');
            console.log(data);
            res.status(422).json({ message: "username already exists" })
        } else if (await User.findOne({ email: data.email })) {
            res.status(422).json({ message: "email already exists" })
        } else {
            const user = new User(data);
            if (data.password) {
                user.hash = bcrypt.hashSync(data.password, 10);
            }
            await user.save();
            res.status(201).json({ message: "registration successful" })
        }
    }
}

// const create = async (userParam) => {
//     console.log('inside create');
//     console.log(userParam);
//     const { error } = validateUser.validate(userParam)

// }

const forgotPassword = async (req, res, next) => {
    const data = req.body
    const { username, password } = data
    console.log(password);
    const { error } = authValidate.validate(data)
    console.log(error);
    if (error) {
        res.json({
            message: 'not a correct format for password'
        })
    }
    else {
        const user = await User.updateOne({ username: username }, {
            $set: {
                hash: bcrypt.hashSync(password, 10)
            }
        })
        res.json({ message: 'password successfully updated' })
    }
}

const validUser = async (req, res, next) => {
    try {
        const validuser = await User.findOne({ email: req.body.email })
        res.status(201).json(validuser)
    } catch (error) {
        res.status(401).json({ message: "user not found" })
    }
}

const updateCart = async (req, res, next) => {
    const data = req.body
    const { id } = req.params
    console.log(data, id);
    console.log(`basket:${data}`);
    console.log('inside update cart');
    const user = await User.updateOne({ _id: id }, {
        $set: {
            carts: req.body.basket
        }
    })
    res.status(201).json({ message: 'cart updated' })
}

const addOrder = async (req, res, next) => {
    console.log(req.body);
    const { id, basket, date, amount, address, contact } = req.body
    const order = new Order({ customer: id, order: basket, amount: amount, address: address, contact: contact, date: date })
    await order.save()
    res.status(200).json({
        message: 'success'
    })
}

const getOrder = async (req, res, next) => {
    const { id } = req.params
    const data = await Order.find({ customer: id }).populate('customer')
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(400).json({ message: 'error' })
    }

}
console.log(config.secret);

// const paymentRazorpay = async (req, res, next) => {

// }

module.exports = {
    authenticate,
    getById,
    auth,
    forgotPassword,
    register,
    validUser,
    updateCart,
    addOrder,
    getOrder
}   