const mongoose = require("mongoose");

const movieModel = new mongoose.Schema({
  _id: {
    type: String,
    required: [true, "please select the movie first"],
  },
  users: [
    {
      id: {
        type: mongoose.Schema.ObjectId,
        ref: "Customer",
      },
      ticket_numbers: Number,
      status: String,
    },
  ],
});
const EventTicket = mongoose.model("eventTicket", eventTicketSchema);
module.exports = EventTicket;
