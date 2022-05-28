const MovieTicket = require("../../models/movieTicketModel");
const Customer = require("../../models/customerModel");

exports.getMovieTicket = async(req, res) => {
    try {
        const movieTicket = await Customer.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data: eventTicket
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

exports.BookMovieTicket = async(req, res) => {
    try {
        await MovieTicket.updateOne({ 'cinemas._id': req.params._id }, {
            $push: {
                "cinemas.cinema_available.customer": req.params.body,
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
            eventTicket_id: req.params.id,
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};