const userService = require('../services/userservices');
const productService = require('../interservices/productService');
const { validateSignup, validateLogin } = require('../validation/userValidation');


//signup
exports.signup = async (req, res) => {
    console.log('Signup request received:', req.body);
    const { error } = validateSignup(req.body);
    if (error) {
        console.error('Signup validation error:', error.details[0].message);
        return res.status(400).send(error.details[0].message);
    }

    try {
        const user = await userService.signup(req.body);
        console.log('User created successfully:', user);
        await productService.notifyUserSignup(user);  
        res.status(201).send({
            message: 'User created successfully',
            user: user
        });
    } catch (err) {
        console.error('Error during signup:', err.message);
        res.status(500).send(err.message);
    }
};


//login
exports.login = async (req, res) => {
    console.log('Login request received:', req.body);
    const { error } = validateLogin(req.body);
    if (error) {
        console.error('Login validation error:', error.details[0].message);
        return res.status(400).send(error.details[0].message);
    }

    try {
        const result = await userService.login(req.body);
        console.log('User logged in successfully:', result.user);
        res.status(200).send(result);
    } catch (err) {
        console.error('Error during login:', err.message);
        res.status(500).send(err.message);
    }
};
