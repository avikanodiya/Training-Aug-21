const joi = require('joi')

const validateUser = joi.object({
    username: joi.string().required(),
    password: joi.string.min(8).required(),
    firstname: joi.string().required(),
    lastname: joi.string().required()
})

module.exports = { validateUser }