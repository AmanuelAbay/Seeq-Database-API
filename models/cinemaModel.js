const mongoose = require("mongoose");

const cinemaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please insert your name"],
  },
  email: {
    type: String,
    required: [true, "please insert your email"],
  },
  status: {
    type: String,
    default: "pending",
  },
  password: {
    type: String,
    required: [true, "please insert your password"],
    minLength: 8,
  },
  license: {
    type: String,
  },

  totalRoom: {
    type: Number,
  },
  seatPerRoom: {
    type: Number,
  },
  // vipNumbers: [Number],
  row: {
    type: Number,
    // required: [true, "please insert seat arrangement information"],
  },
  column: {
    type: Number,
    // required: [true, "please insert seat arrangement information"],
  },
  address: {
    city: {
      type: String,
      // required: [true, "please insert your city"],
    },
    subCity: {
      type: String,
      // required: [true, "please insert the subCity"],
    },
  },
});
const Cinema = mongoose.model("Cinema", cinemaSchema);
module.exports = Cinema;
