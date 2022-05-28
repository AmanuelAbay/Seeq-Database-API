const express = require('express');
const movieController = require('../../controllers/customer/movieController');

const router = express.Router();

router
    .route('/')
    .get(movieController.getAllMovies)

router
    .route('/:id')
    .get(movieController.getMovie)

module.exports = router;