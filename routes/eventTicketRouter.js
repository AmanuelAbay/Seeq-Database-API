/* eslint-disable prettier/prettier */
const express = require("express");
const eventTicketController = require("./../controllers/eventTicketController");

const router = express.Router();

router
  .route("/")
  .get(eventTicketController.getAllEventTickets)
  .post(eventTicketController.createEventTicket);

router
  .route("/:id")
  .get(eventTicketController.getEventTicket)
  .patch(eventTicketController.updateEventTicket)
  .delete(eventTicketController.deleteEventTicket);

module.exports = router;
