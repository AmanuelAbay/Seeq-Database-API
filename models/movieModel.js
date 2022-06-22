const mongoose = require("mongoose");

const movieModelSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  movie_title: String,
  movie_poster: String,
  cinema_address: String,
  date: String,
  ticket_number: [Number],
  status: String,
  bought_by: {
    type: mongoose.Schema.ObjectId,
    ref: "Customer",
  },
});
const user_ticket = mongoose.model("user_ticket", movieModelSchema);
module.exports = user_ticket;
