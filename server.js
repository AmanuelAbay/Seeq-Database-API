/* eslint-disable import/newline-after-import */
/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const customerApp = require('./app/customerApp');
const cinemaApp = require('./app/cinemaApp');
const organizerApp = require('./app/organizerApp');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD);

// mongoose connection is established
mongoose.
connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log("SEEQ DB READY!")
});

const CUSTOMER_PORT = process.env.CUSTOMER_PORT || 3000;
const CINEMA_PORT = process.env.CINEMA_PORT || 5000;
const ORGANIZER_PORT = process.env.ORGANIZER_PORT || 7000;

customerApp.listen(CUSTOMER_PORT, () => {
    console.log(`SEEQ CUSTOMER PORT ${CUSTOMER_PORT}...`);
});
cinemaApp.listen(CINEMA_PORT, () => {
    console.log(`SEEQ CINEMA PORT ${CINEMA_PORT}...`);
});
organizerApp.listen(ORGANIZER_PORT, () => {
    console.log(`SEEQ ORGANIZER PORT ${ORGANIZER_PORT}...`);
});