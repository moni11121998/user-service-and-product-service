const User = require('../models/usermodels');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utlis/jwtUtlis')

//signup services
exports.signup = async (userData) => {
    const { name, email, username, password } = userData;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error('User already exists with this email.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
        name,
        email,
        username,
        password: hashedPassword
    });

    await user.save();

    return user;
};


//login services
exports.login = async (userData) => {
    const { username, password } = userData;
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error('Invalid username or password.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid username or password.');
    }

    const token = generateToken(user);

    return { user, token };
};
