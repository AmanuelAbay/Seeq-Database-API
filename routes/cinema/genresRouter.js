/* eslint-disable prettier/prettier */
const express = require("express");
const genreController = require("../../controllers/cinema/genreController");

const router = express.Router();

router
    .route("/")
    .get(genreController.getGenres)

module.exports = router;