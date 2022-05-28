const MovieTicket = require("../../models/movieTicketModel");

exports.getAllMovies = async(req, res) => {
    try {
        // TODO: it wll return a list of movies which is availabe in external API
        const movies = await MovieTicket.find();
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

exports.getMovieTicket = async(req, res) => {
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

exports.createMovie = async(req, res) => {
    try {
        // TODO: the name will be changed from movieTicket to DisplayedMovie
        // TODO: it will check if the movie is already exist or not
        // TODO: if the Seeq DB contain the movie id, the cinema id will be the part of existed array list else the new array list will be created to collect all cinema ids
        const CinemaInfo = await MovieTicket.create(req.body);
        res.status(200).json({
            status: "success",
            new_movie_id: CinemaInfo._id
        });
    } catch (err) {
        res.status(400).json({
            status: "error",
            message: err,
        });
    }
};

exports.updateMovieTicket = async(req, res) => {
    try {
        const movieTicket = await MovieTicket.findByIdAndUpdate(
            req.params.id,
            req.body, {}
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
exports.deleteMovieTicket = async(req, res) => {
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
exports.activeMovie = async(req, res) => {
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