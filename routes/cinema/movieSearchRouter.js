/* eslint-disable prettier/prettier */
const express = require("express");
const movieSearchController = require("../../controllers/cinema/movieSearchController");

const router = express.Router();

router
    .route("/")
    .get(movieSearchController.searchMovies)

module.exports = router;