const axios = require("axios");
/* eslint-disable prettier/prettier */
const Movie = require("../../models/movieTicketModel");
exports.getAllMovies = async (req, res) => {
  try {
    const movie = await Movie.find();
    console.log(movie);
    res.status(200).json({
      status: "success",
      data: movie
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getMovie = async (req, res) => {
  try {
    // console.log("working");
    const movie = await Movie.find({ _id: req.params.id });
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${process.env.MOVIE_API_KEY}&language=en-US`
    );
    res.status(200).json({
      status: "success",
      message: "done",
      movie: movie[0],
      movieInfo: data,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
