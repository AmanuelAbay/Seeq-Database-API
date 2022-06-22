/* eslint-disable prettier/prettier */
const express = require("express");
const movieTicketController = require("../../controllers/cinema/moviesController");

const router = express.Router();

router
    .route("/")
    .get(movieTicketController.getAllMovies)

module.exports = router;