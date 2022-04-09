/* eslint-disable prettier/prettier */
const express = require('express');
const customerController = require('../../controllers/customer/customerController');

const router = express.Router();


router
    .route('/')
    .post(customerController.createCustomer);

router
    .route('/:id')
    .get(customerController.getCustomer)
    .patch(customerController.updateCustomer)
    .delete(customerController.deleteCustomer);

module.exports = router;