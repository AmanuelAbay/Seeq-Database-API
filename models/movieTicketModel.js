const mongoose = require('mongoose');

const movieTicketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "please insert your name"]
    },
    cover_image: {
        type: String,
        required: [true, "please insert the cover photo"]
    },
    organizer: {
        type: mongoose.Schema.ObjectId,
        ref: 'Organizer'
    },
    startedDate: {
        Date: {
            type: String,
            required: [true, "please insert event starting Date"]
        },
        Hours: {
            type: String,
            required: [true, "please insert event starting Hour"]
        }
    },
    endDate: {
        Date: {
            type: String,
            required: [true, "please insert event starting Date"]
        },
        Hours: {
            type: String,
            required: [true, "please insert event starting Hour"]
        }
    },
    price: {
        normal: {
            type: Number
        },
        vip: {
            type: Number
        },
        default: 0
    },
    place: {
        city: {
            type: String,
            required: [true, "please insert your city"]
        },
        Location: {
            coordinates: [Number]
        },
        required: [true, "please insert the place where event will be takes place"]
    },
    users: [{
        id: {
            type: mongoose.Schema.ObjectId,
            ref: 'Customer'
        },
        ticket_numbers: Number,
        status: String
    }]
})
const MovieTicket = mongoose.model('eventTicket', movieTicketSchema);
module.exports = MovieTicket