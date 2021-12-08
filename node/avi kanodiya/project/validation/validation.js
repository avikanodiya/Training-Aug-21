const Joi = require('@hapi/joi')

const validateUser = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().max(50).email().required(),
    password: Joi.string().min(8).required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required()
})

const authValidate = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().min(8).required()
})



const productValidate = Joi.object({
    category: Joi.string().required(),
    subcategory: Joi.string().required(),
    title: Joi.string().required(),
    company: Joi.string().required(),
    pattern: Joi.string(),
    imageUrl: Joi.string().required(),
    price: Joi.number().required(),
    specification: Joi.object().keys({
        storage: Joi.string(),
        screenSize: Joi.string(),
        resolution: Joi.string(),
        displayTech: Joi.string(),
        modelyear: Joi.number(),
    })
})


module.exports = { validateUser, authValidate, productValidate }