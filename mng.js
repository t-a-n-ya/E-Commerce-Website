const mongoose = require('mongoose');

const contactschema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});
const signupschema = new mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    password: String,
    address: String,
});

module.exports = mongoose.model('Contact', contactschema);
module.exports = mongoose.model('Signup', signupschema);
