/* eslint-disable prettier/prettier */
const express = require("express");
const movieTicketController = require("../../controllers/customer/movieTicketController");
const router = express.Router();

router
    .route("/:id")
    .get(movieTicketController.getMovieTicket)
    .post(movieTicketController.BookMovieTicket)
    .delete(movieTicketController.deleteMovieTicket);
module.exports = router;