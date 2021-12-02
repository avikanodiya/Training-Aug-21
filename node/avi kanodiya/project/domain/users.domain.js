const jwt = require('jsonwebtoken')
const config = require('../authorization/config.json')
const bcrypt = require('bcryptjs')
const db = require('../model/users.model');
const { validateUser, authValidate } = require('../validation/validation');
const User = db.User;

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

const auth = (req, res, next) => {
    console.log('inside auth');
    console.log(req.body);
    authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or Password is incorrect' }))
        .catch(err => next(err))
}

const getById = async (id) => {
    const user = await User.findById(id)
    console.log(user);
    return user
}

const register = (req, res, next) => {
    console.log('inside register');
    create(req.body)
        .then(() => res.json({ message: 'account created' }))
        .catch(err => next(err))
}

const create = async (userParam) => {
    console.log('inside create');
    console.log(userParam);
    const { error } = validateUser.validate(userParam)
    if (error) {
        console.log('validation error');
        res.json({
            message: 'not a validate input'
        })
    }
    else {
        if (await User.findOne({ username: userParam.username })) {
            console.log('inside else');
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

console.log(config.secret);

module.exports = {
    authenticate,
    getById,
    create,
    auth,
    forgotPassword,
    register
}