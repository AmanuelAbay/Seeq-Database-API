const Cinema = require("./../models/cinemaModel");

exports.getAllCinemas = async (req, res) => {
  try {
    const cinemas = await Cinema.find();
    res.status(200).json({
      status: "success",
      requestedAt: req.requestTime,
      results: cinemas.length,
      data: cinemas,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getCinema = async (req, res) => {
  // console.log(req.params);
  // const id = req.params.id * 1;
  try {
    const cinema = await Cinema.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        cinema,
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

exports.createCinema = async (req, res) => {
  try {
    const newCinema = await Cinema.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        cinema_id: newCinema._id,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err,
    });
  }
};

exports.updateCinema = async (req, res) => {
  try {
    const cinema = await Cinema.findByIdAndUpdate(req.params.id, req.body, {});
    res.status(200).json({
      status: "success",
      data: {
        cinema,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteCinema = async (req, res) => {
  try {
    await Cinema.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      cinema_id: req.params.id,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
