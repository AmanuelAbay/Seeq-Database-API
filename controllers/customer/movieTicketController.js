const MovieTicket = require("../../models/movieTicketModel");
const Customer = require("../../models/customerModel");
const movieTicketModel = require("../../models/movieModel");
const dateTime = require("node-datetime");

exports.getMovieTicket = async (req, res) => {
  try {
    const movieTicket = await Customer.find({bought_by:req.params.id});
    res.status(200).json({
      status: "success",
      data: movieTicket,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createMovieTicket = async (req, res) => {
  //   console.log(req.body);
//   const Date = dateTime.create().format("Y-m-d H:M:S");
  const user_movie_ticket = {
    name: req.body.name,
    movie_title: req.body.movie_title,
    movie_poster: req.body.movie_poster,
    cinema_address: req.body.cinema_address,
    date: dateTime.create().format("Y-m-d H:M:S"),
    ticket_number: req.body.ticket_number,
    status: req.body.status,
    bought_by: req.body.bought_by
  };
  try {
    const ticket = await movieTicketModel.create(user_movie_ticket);
    res.status(200).json({
      status: "success",
    //   user: user_movie_ticket
      ticket: ticket._id,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteMovieTicket = async (req, res) => {
  try {
    await MovieTicket.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      eventTicket_id: req.params.id,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
