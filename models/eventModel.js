const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "please insert your name"]
    },
    images_url: {
        path: {
            type: [String],
            required: [true, "please insert at least one image"]
        }
    },
    cover_image: {
        type: String,
        required: [true, "please insert the cover photo"]
    },
    description: {
        type: String,
        required: [true, "please insert your email"]
    },
    category: {
        type: String,
        required: [true, "please insert your password"]
    },
    status: String,
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
    quantity: {
        type: Number
    },
    place: {
        city: {
            type: String,
            required: [true, "please insert your city"]
        },
        Location: {
            coordinates: {
                type: [Number],
                required: [true, "please insert the place where event will be takes place"]
            }
        }
    },
    attendee: [{
        _id: {
            type: mongoose.Schema.ObjectId,
            ref: 'Customer'
        },
        ticket_numbers: Number,
        status: String,
    }]
})
const Event = mongoose.model('Event', eventSchema);
module.exports = Event