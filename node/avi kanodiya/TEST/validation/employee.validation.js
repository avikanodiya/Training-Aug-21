const Joi = require('@hapi/joi')

const EmployeeValidation = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    address: Joi.string().required()
})

module.exports = {EmployeeValidation}