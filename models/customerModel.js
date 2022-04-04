const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please insert your name"]
    },
    phone_number: {
        type: String,
        required: [true, "please insert your phone number"],
        minLength: 10
    },
    email: {
        type: String,
        required: [true, "please insert your email"]
    },
    password: {
        type: String,
        required: [true, "please insert your password"],
        minLength: 8,
        select: false
    }
})
const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer