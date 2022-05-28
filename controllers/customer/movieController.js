/* eslint-disable prettier/prettier */
const Movie = require("../../models/movieTicketModel");
exports.getAllMovies = async(req, res) => {
    try {
        const movies = await Movie.find().select('-cinemas -__v');
        res.status(200).json({
            status: "success",
            requestedAt: req.requestTime,
            results: movies.length,
            data: movies,
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

exports.getMovie = async(req, res) => {
    try {
        const movie = await Movie.findById(req.params.id).select('-_id -cinemas.cinema_available.customer -__v').populate({
            path: 'cinemas._id',
            select: '-password -__v -_id -seat -address'
        });
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