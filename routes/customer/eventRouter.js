const express = require('express');
const eventController = require('../../controllers/customer/eventController');

const router = express.Router();

router
    .route('/')
    .get(eventController.getAllEvents)

router
    .route('/:id')
    .get(eventController.getEvent)

module.exports = router;