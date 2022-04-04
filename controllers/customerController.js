const Customer = require('./../models/customerModel');

exports.getAllCustomers = async(req, res) => {
    try {
        const customers = await Customer.find()
        res.status(200).json({
            status: 'success',
            requestedAt: req.requestTime,
            results: customers.length,
            data: customers
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};

exports.getCustomer = async(req, res) => {
    // console.log(req.params);
    // const id = req.params.id * 1;
    try {
        const customer = await Customer.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                customer
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
    // const tour = tours.find(el => el.id === id);
};

exports.createCustomer = async(req, res) => {
    try {
        const newCustomer = await Customer.create(req.body)
        res.status(200).json({
            status: 'success',
            data: {
                customer_id: newCustomer._id
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'error',
            message: err
        })
    }

};

exports.updateCustomer = async(req, res) => {
    try {
        const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {})
        res.status(200).json({
            status: 'success',
            data: {
                customer
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
};

exports.deleteCustomer = async(req, res) => {
    try {
        await Customer.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: 'success',
            cinema_id: req.params.id
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
};