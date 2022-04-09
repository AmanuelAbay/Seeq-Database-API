/* eslint-disable prettier/prettier */
const express = require('express');
const morgan = require('morgan');

const cinemaRouter = require('../routes/cinema/cinemaRouter');
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
// 3) ROUTER
app.use('/seeq/api/cinemas', cinemaRouter);
app.all('*', (req, res, next) => {
    res.status(404).json({
        status: 'FAIL',
        message: `CAN'T FIND ${req.originalUrl} ON CINEMA SERVER`
    })
})

module.exports = app;