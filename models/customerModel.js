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
    }
}, { toJSON: { virtuals: true }, toObject: { virtuals: true } })

customerSchema.virtual('tickets', {
    ref: 'Event',
    foreignField: 'attendee._id',
    localField: '_id'
})

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer