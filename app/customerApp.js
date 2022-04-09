/* eslint-disable prettier/prettier */
const express = require('express');
const morgan = require('morgan');
const customerRouter = require('../routes/customer/customerRouter');
const eventTicketRouter = require('../routes/customer/eventTicketRouter');
const eventsRouter = require('../routes/customer/eventRouter');
const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));


app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

// 3) ROUTES

app.use('/seeq/api/user', customerRouter);
app.use('/seeq/api/events', eventsRouter);
app.use('/seeq/api/events/ticket', eventTicketRouter);
app.all('*', (req, res, next) => {
    res.status(404).json({
        status: 'FAIL',
        message: `CAN'T FIND ${req.originalUrl} ON CUSTOMER SERVER`
    })
})

module.exports = app;