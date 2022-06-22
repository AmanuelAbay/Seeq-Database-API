const mongoose = require("mongoose");

const movieTicketSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: [true, "please insert movie"],
  },
  title:{
    type:String,
    required:[true, "please enter the title"]
  },
  movie_poster: {
    type: String,
    required: [true, "please insert the thumbnail of movie"],
  },
  rate: {
    type: Number,
    required: [true, "please insert the rate of movie"],
  },
  available: [
    {
      date: {
        type: String,
        required: [true, "please insert event starting Date"],
      },
      cinemas: [
        {
          _id: {
            type: mongoose.Schema.ObjectId,
            ref: "Cinema",
          },
          room: {
            type: Number,
            required: [true, "please specify the room number"],
          },
          time: {
            type: String,
            required: [true, "please specify the room number"],
          },
          token_seat: {
            type: Array,
            required: [true, "please insert event starting Hour"],
          },
          status: {
            type:String,
            required: [true, "status Required!"],
          },
        },
      ],
    },
  ],
});
const MovieTicket = mongoose.model("movieTicket", movieTicketSchema);
module.exports = MovieTicket;
