const Joi = require('joi');

const validateProduct = (product) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        description: Joi.string().max(500).optional(),
        price: Joi.number().greater(0).required(),
        quantity: Joi.number().integer().min(0).required()
    });
    return schema.validate(product);
};

module.exports = { validateProduct };
