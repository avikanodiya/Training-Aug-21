const config = require('../authorization/config.json')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const db = require('../model/db');
const { validateUser } = require('../validation/validation');
const User = db.User;

const auth = (req, res, next) => {
    auth.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or Password is incorrect' }))
        .catch(err => next(err))
}

const authenticate = async ({ username, password }) => {
    var query = {};
    query[username] = username
    const user = await User.findOne({ query });
    console.log('inside auth');
    console.log(username);
    console.log(user);
    console.log(`hi ${user.username}`);
    if (user && bcrypt.compareSync(password, user.hash)) {
        console.log(password);
        const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '3d' })
        return {
            ...user.toJSON(), token
        };
    }
}

//authorization pending/jwt verify authorization
const getAll = async () => {
    console.log('hi');
    return await User.find();
}

const getById = async (id) => {
    const user = await User.findById(id)
    console.log(user);
    return user
}

const create = async (userParam) => {
    console.log('inside create');
    console.log(userParam);
    const { error } = validateUser.validate(userParam)
    if (err) {
        res.json({
            message: 'not a validate input'
        })
    }
    else {
        if (await User.findOne({ username: userParam.username })) {
            console.log(userParam);
            throw 'Username "' + userParam.username + '" is already taken';
        }

        const user = new User(userParam);

        if (userParam.password) {
            user.hash = bcrypt.hashSync(userParam.password, 10);
        }
        await user.save();
    }

}

const forgotPassword = async (req, res, next) => {
    const data = req.body
    const { error } = validateUser.validate(data)
    if (err) {
        res.json({
            message: 'not a correct format for password'
        })
    }
    else {
        await updatePassword(username, hash)
        res.json({
            message: 'seccessfully changed password'
        })
    }
}

console.log(config.secret);

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    auth,
    forgotPassword
}