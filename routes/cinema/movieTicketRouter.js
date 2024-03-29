/* eslint-disable prettier/prettier */
const express = require("express");
const movieTicketController = require("../../controllers/cinema/movieTicketController");

const router = express.Router();

router
    .route("/")
    .get(movieTicketController.getAllMovies)
    .post(movieTicketController.createMovieTicket);

router
    .route("/:id")
    .get(movieTicketController.getMovieTicket)
    .patch(movieTicketController.updateMovieTicket)
    .delete(movieTicketController.deleteMovieTicket);

module.exports = router;