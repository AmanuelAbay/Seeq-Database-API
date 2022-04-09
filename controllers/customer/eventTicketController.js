const Event = require("../../models/eventModel");

exports.getEventTicket = async(req, res) => {
    try {
        const eventTicket = await Event.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data: {
                eventTicket,
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
exports.getEventTickets = async(req, res) => {

    try {
        const eventTickets = await Event.find();
        res.status(200).json({
            status: "success",
            data: {
                eventTickets
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

exports.BookEventTicket = async(req, res) => {
    try {
        await Event.findByIdAndUpdate(
            req.params.id, {
                $push: {
                    attendee: req.body
                }
            }
        );
        res.status(200).json({
            status: "success",
            data: "event successfully booked"
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

exports.deleteEventTicket = async(req, res) => {
    try {
        await Event.findByIdAndDelete(req.params.id);
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