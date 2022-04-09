/* eslint-disable prettier/prettier */
const express = require("express");
const eventTicketController = require("../../controllers/customer/eventTicketController");
const router = express.Router();

router
    .route("/:id")
    .get(eventTicketController.getEventTicket)
    .post(eventTicketController.BookEventTicket)
    .delete(eventTicketController.deleteEventTicket);
module.exports = router;