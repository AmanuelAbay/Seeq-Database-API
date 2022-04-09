const mongoose = require("mongoose");

const cinemaSchema = new mongoose.Schema({
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
  seat: {
    totalRoom: {
      type: Number,
      required: [true, "please insert total room number"],
    },
    seatPerRoom: {
      type: Number,
      required: [true, "please insert number of seat per room"],
    },
    vipNumbers: [Number],
    row: {
      type: Number,
      required: [true, "please insert seat arrangement information"],
    },
    column: {
      type: Number,
      required: [true, "please insert seat arrangement information"],
    },
  },
});
const Cinema = mongoose.model("Cinema", cinemaSchema);
module.exports = Cinema;
