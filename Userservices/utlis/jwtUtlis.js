const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (user) => {
    return jwt.sign(
        {
            _id: user._id,
           
            email: user.email,
            username: user.username
        },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
};

module.exports = { generateToken };
