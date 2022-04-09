const MovieTicket = require("./../models/movieTicketModel");

exports.getAllMovieTickets = async (req, res) => {
  try {
    const movieTickets = await MovieTicket.find();
    res.status(200).json({
      status: "success",
      requestedAt: req.requestTime,
      results: movieTickets.length,
      data: movieTickets,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getMovieTicket = async (req, res) => {
  // console.log(req.params);
  // const id = req.params.id * 1;
  try {
    const movieTicket = await MovieTicket.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        movieTicket,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
  // const tour = tours.find(el => el.id === id);
};

exports.createMovieTicket = async (req, res) => {
  try {
    const newMovieTicket = await MovieTicket.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        movieTicket_id: newMovieTicket._id,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err,
    });
  }
};

exports.updateMovieTicket = async (req, res) => {
  try {
    const movieTicket = await MovieTicket.findByIdAndUpdate(
      req.params.id,
      req.body,
      {}
    );
    res.status(200).json({
      status: "success",
      data: {
        movieTicket,
      },
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
      movieTicket_id: req.params.id,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
