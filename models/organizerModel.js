<<<<<<< HEAD
const mongoose = require('mongoose');

const organizerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please insert your name"]
    },
    phone_number: {
        type: Number,
        required: [true, "please insert your phone number"]
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
    },
    address: {
        city: {
            type: String,
            required: [true, "please insert your city"]
        },
        Location: {
            coordinates: [Number]
        },
    }
})
const Organizer = mongoose.model('Organizer', organizerSchema);
module.exports = Organizer
=======
const mongoose = require("mongoose");

const organizerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please insert your name"],
  },
  phone_number: {
    type: Number,
    required: [true, "please insert your phone number"],
  },
  email: {
    type: String,
    required: [true, "please insert your email"],
  },
  password: {
    type: String,
    required: [true, "please insert your password"],
    minLength: 8,
    select: false,
  },
  address: {
    city: {
      type: String,
      required: [true, "please insert your city"],
    },
    Location: {
      coordinates: [Number],
    },
  },
});
const Organizer = mongoose.model("Organizer", organizerSchema);
module.exports = Organizer;
>>>>>>> d5c9546bfa73a5b8ac835e1e0dfcb92a83f63f55
