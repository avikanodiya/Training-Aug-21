const joi = require('joi')

const fees = joi.object.keys({
    Amount: joi.number().required(),
    PaymentDate: joi.date().required(),
    Status: joi.Boolean()
}
)
const result = joi.object.keys({
    Hindi: joi.number.required(),
    Eng: joi.number.required(),
    Math: joi.number.required(),
    Total: joi.number.required(),
    Grade: joi.number.required()

})



const validateUser = joi.object({
    _id: joi.number().required(),
    Name: joi.string.required(),
    Address: joi.string().required(),
    Fees: fees,
    Result: result
})

module.exports = { validateStudent }
