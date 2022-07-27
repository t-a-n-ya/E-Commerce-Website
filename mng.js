const mongoose = require('mongoose');

const contactschema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

module.exports = mongoose.model('Contact', contactschema);
