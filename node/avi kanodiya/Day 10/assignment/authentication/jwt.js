const jwt = require('jsonwebtoken')
const { decode } = require('punycode')
const config = require('./config.json')
const secret = config.secret


const token = (user) => {
    return jwt.sign(user, secret, {
        alogrithm: config.algorithm,
        expiresIn: '3d'
    })
}

const verify = (accessToken) => {
    console.log('inside verify');
    return jwt.verify(accessToken, secret, {
        alogrithm: config.algorithm,
        expiresIn: '3d'
    }, async (err, decode) => {
        if (err) {

        } else {
            console.log(decode);

        }
    })
}



module.exports = { token, verify }