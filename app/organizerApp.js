/* eslint-disable prettier/prettier */
const express = require('express');
const morgan = require('morgan');
const organizerRouter = require('../routes/organizer/organizerRouter');
const eventRouter = require('../routes/organizer/eventRouter');
const cors = require('cors');
const app = express();

app.use(cors());
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

app.use('/seeq/api/organizer', organizerRouter);
app.use('/seeq/api/events', eventRouter);
app.all('*', (req, res, next) => {
    res.status(404).json({
        status: 'FAIL',
        message: `CAN'T FIND ${req.originalUrl} ON ORGANIZER SERVER`
    })
})

module.exports = app;