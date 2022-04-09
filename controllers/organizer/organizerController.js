const Organizer = require("../../models/organizerModel");

exports.getAllOrganizers = async(req, res) => {
    try {
        const organizers = await Organizer.find();
        res.status(200).json({
            status: "success",
            requestedAt: req.requestTime,
            results: organizers.length,
            data: organizers,
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

exports.getOrganizer = async(req, res) => {
    // console.log(req.params);
    // const id = req.params.id * 1;
    try {
        const organizer = await Organizer.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data: {
                organizer,
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

exports.createOrganizer = async(req, res) => {
    try {
        const newOrganizer = await Organizer.create(req.body);
        res.status(200).json({
            status: "success",
            data: {
                organizer_id: newOrganizer._id,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "error",
            message: err,
        });
    }
};

exports.updateOrganizer = async(req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, {});
        res.status(200).json({
            status: "success",
            data: {
                organizer,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

exports.deleteOrganizer = async(req, res) => {
    try {
        await Organizer.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: "success",
            organizer_id: req.params.id,
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};