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

const specData = Joi.object().keys({
    modelName: Joi.string().required(),
    brand: Joi.string().required(),
    Storage: Joi.string().required(),
    processor: Joi.string().required()
})

const productValidate = Joi.object({
    company: Joi.string().required(),
    name: Joi.string().required(),
    imageUrl: Joi.string().required(),
    price: Joi.number().required(),
    specification: [specData]
})

const tvValidate = Joi.object({
    company: Joi.string().required(),
    name: Joi.string().required(),
    size: Joi.string().required(),
    patternName: Joi.string().required(),
    imageUrl: Joi.string().required(),
    price: Joi.number().required(),
    specification: Joi.object().keys({
        screenSize: Joi.string().required(),
        supportedServices: Joi.string().required(),
        connectorType: Joi.string().required(),
        Brand: Joi.string().required(),
        Resolution: Joi.string().required(),
        displayTech: Joi.string().required(),
        modelYear: Joi.number().required()
    })
})

module.exports = { validateUser, authValidate, productValidate, tvValidate }