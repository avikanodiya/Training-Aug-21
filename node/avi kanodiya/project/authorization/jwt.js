const expressJwt = require('express-jwt')
const config = require('./config.json')
const auth = require('../middleware/auth')

const jwt = () => {
    const secret = config.secret;
    return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            '/users/authenticate',
            '/users/register'
        ]
    })

}

const isRevoked = async (req, payload, done) => {
    console.log(payload.sub);
    const user = await auth.getById(payload.sub)
    console.log(user);

    if (!user) {
        return done(null, true)
    }
    done();
}

module.exports = jwt;