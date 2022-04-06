const EventTicket = require("./../models/eventTicketModel");

exports.getAllEventTickets = async (req, res) => {
  try {
    const eventTickets = await EventTicket.find();
    res.status(200).json({
      status: "success",
      requestedAt: req.requestTime,
      results: eventTickets.length,
      data: eventTickets,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getEventTicket = async (req, res) => {
  // console.log(req.params);
  // const id = req.params.id * 1;
  try {
    const eventTicket = await EventTicket.findById(req.params.id);
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

exports.createEventTicket = async (req, res) => {
  try {
    const newEventTicket = await EventTicket.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        eventTicket_id: newEventTicket._id,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err,
    });
  }
};

exports.updateEventTicket = async (req, res) => {
  try {
    const eventTicket = await EventTicket.findByIdAndUpdate(
      req.params.id,
      req.body,
      {}
    );
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
};

exports.deleteEventTicket = async (req, res) => {
  try {
    await EventTicket.findByIdAndDelete(req.params.id);
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
