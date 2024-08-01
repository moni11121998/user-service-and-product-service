const Joi = require('joi');

//validate signup
const validateSignup = (data) => {
    const schema = Joi.object({
        // name: Joi.string().min(3).max(30).required(),
        email: Joi.string().min(6).max(255).required().email(),
        username: Joi.string().min(3).max(30).required(),
        password: Joi.string().min(6).max(1024).required()
    });
    return schema.validate(data);
};

//validate login
const validateLogin = (data) => {
    const schema = Joi.object({
        username: Joi.string().min(3).max(30).required(),
        password: Joi.string().min(6).max(1024).required()
    });
    return schema.validate(data);
};

module.exports = { validateSignup, validateLogin };
