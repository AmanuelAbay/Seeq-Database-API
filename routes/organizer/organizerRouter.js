/* eslint-disable prettier/prettier */
const express = require("express");
const organizerController = require("../../controllers/organizer/organizerController");

const router = express.Router();

router
    .route("/")
    .post(organizerController.createOrganizer);

router
    .route("/:id")
    .get(organizerController.getOrganizer)
    .patch(organizerController.updateOrganizer)
    .delete(organizerController.deleteOrganizer);

module.exports = router;