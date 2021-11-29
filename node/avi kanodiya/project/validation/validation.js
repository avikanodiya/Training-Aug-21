const Joi = require('@hapi/joi')

const validateUser = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().min(8).required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required()
})

const authValidate = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().min(8).required()
})

module.exports = { validateUser, authValidate }