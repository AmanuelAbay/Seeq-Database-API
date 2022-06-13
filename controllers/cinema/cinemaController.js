const Cinema = require("../../models/cinemaModel");
const imageUpload = require("../../handler/imageUpload");

exports.getCinema = async (req, res) => {
  // console.log(req.params);
  // const id = req.params.id * 1;
  try {
    const cinema = await Cinema.findById(req.params.id);
    res.status(200).json({
      status: "success",
      cinema: cinema,
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
    // create cinema request
    const cinema = {
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      status: req.body.status,
      password: req.body.password,
      license: await imageUpload(req.body.license),
    };
    const newCinema = await Cinema.create(cinema);

    res.status(200).json({
      status: "success",
      id: newCinema._id,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateCinema = async (req, res) => {
  try {
    const cinema = await Cinema.updateOne({_id:req.params.id}, req.body, {multi:true});
    res.status(200).json({
      status: "success",
      data: "successfully Updated the data!!"
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

//TODO: DELETE ACCOUNT OF CINEMA
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
