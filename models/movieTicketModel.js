const mongoose = require('mongoose');

const movieTicketSchema = new mongoose.Schema({
    movie_id: {
        type: String,
        required: [true, "please insert movie"]
    },
    cinemas: [{
        _id: {
            type: mongoose.Schema.ObjectId,
            ref: 'Cinema'
        },
        cinema_available: [
            {
            status: String,
            Date: {
                type: String,
                required: [true, "please insert event starting Date"]
            },
            Hours: {
                type: String,
                required: [true, "please insert event starting Hour"]
            },
            room_no: Number,
            customer: [{
                _id: {
                    type: mongoose.Schema.ObjectId,
                    ref: 'Customer'
                },
                seat_number: [Number],
            }]
        }]
    }]
})
const MovieTicket = mongoose.model('movieTicket', movieTicketSchema);
module.exports = MovieTicket