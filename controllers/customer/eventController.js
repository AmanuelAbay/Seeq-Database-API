/* eslint-disable prettier/prettier */
const Event = require("../../models/eventModel");
exports.getAllEvents = async(req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json({
            status: "success",
            requestedAt: req.requestTime,
            results: events.length,
            data: events,
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

exports.getEvent = async(req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data: event
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};