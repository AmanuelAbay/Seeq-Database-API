/* eslint-disable prettier/prettier */
const express = require("express");
const movieTicketController = require("../../controllers/customer/movieTicketController");
const router = express.Router();

router
  .route("/")
  .get(movieTicketController.getMovieTicket)
  .post(movieTicketController.createMovieTicket)
  .delete(movieTicketController.deleteMovieTicket);
router
  .route("/:id")
  .get(movieTicketController.getMovieTicket)
  .post(movieTicketController.createMovieTicket)
  .delete(movieTicketController.deleteMovieTicket);
module.exports = router;
