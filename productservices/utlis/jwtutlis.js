const jwt = require('jsonwebtoken');

const SECRET_KEY = 'your_secret_key';

exports.generateToken = (payload) => jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

exports.verifyToken = (token) => jwt.verify(token, SECRET_KEY);
