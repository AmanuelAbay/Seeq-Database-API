/* eslint-disable prettier/prettier */
const express = require('express');
const morgan = require('morgan');

const cinemaRouter = require('./routes/cinemaRouter');
const organizerRouter = require('./routes/organizerRouter');

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

app.use('/seeq/api/cinemas', cinemaRouter);
app.use('/seeq/api/organizers', organizerRouter);
app.use('/seeq/api/movie', cinemaRouter);
app.use('/seeq/api/events', organizerRouter);
app.all('*', (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: `can't find ${req.originalUrl} on this server`
    })
})

module.exports = app;