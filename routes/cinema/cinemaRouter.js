/* eslint-disable prettier/prettier */
const express = require('express');
const cinemaController = require('../../controllers/cinema/cinemaController');

const router = express.Router();


router
    .route('/')
    .get(cinemaController.getAllCinemas)
    .post(cinemaController.createCinema);

router
    .route('/:id')
    .get(cinemaController.getCinema)
    .patch(cinemaController.updateCinema)
    .delete(cinemaController.deleteCinema);

module.exports = router;