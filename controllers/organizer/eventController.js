const Event = require("../../models/eventModel");

exports.getAllEvents = async(req, res) => {
    try {
        const events = await Event.find().select('-__v -organizer').populate({ path: 'attendee._id', select: '-__v -_id -password' });
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
        const event = await Event.findById(req.params.id).populate({ path: 'attendee._id', select: '-__v -_id -password' });
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

exports.createEvent = async(req, res) => {
    try {
        const newEvent = await Event.create(req.body);
        res.status(200).json({
            status: "success",
            data: {
                event_id: newEvent._id,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "error",
            message: err,
        });
    }
};

exports.updateEvent = async(req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, {});
        res.status(200).json({
            status: "success",
            data: {
                event,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

exports.deleteEvent = async(req, res) => {
    try {
        await Event.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: "success",
            event_id: req.params.id,
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};