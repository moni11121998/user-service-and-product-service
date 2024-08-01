const axios = require('axios');

exports.notifyUserSignup = async (user) => {
    console.log('Notifying Product Service about new user:', user);
    try {
        const response = await axios.post(`${process.env.PRODUCT_SERVICE_URL}/api/products/user-signup`, { user });
        console.log('Product Service notified successfully:', response.data);
    } catch (err) {
        console.error('Error notifying Product Service:', err.message);
    }
};
