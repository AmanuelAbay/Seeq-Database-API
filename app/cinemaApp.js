/* eslint-disable prettier/prettier */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require("body-parser");
const cinemaRouter = require('../routes/cinema/cinemaRouter');
const movieTicketRouter = require('../routes/cinema/movieTicketRouter');
const moviesRouter = require('../routes/cinema/moviesRouter');
const genresRouter = require('../routes/cinema/genresRouter');
const movieSearchRouter = require('../routes/cinema/movieSearchRouter');
const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json({ limit: "50MB" }));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));



app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});
// 3) ROUTER
app.use('/seeq/api/cinemas', cinemaRouter);
app.use('/seeq/api/movie/tickets', movieTicketRouter);
app.use('/seeq/api/movies', moviesRouter);
app.use('/seeq/api/movies/search', movieSearchRouter);
app.use('/seeq/api/movies/genres', genresRouter);
app.all('*', (req, res, next) => {
    res.status(404).json({
        status: 'FAIL',
        message: `CAN'T FIND ${req.originalUrl} ON CINEMA SERVER`
    })
})

module.exports = app;