const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    name: String,
    date: Date,
    time: String,
    numGuests: Number,
    note: String
})

module.exports = mongoose.model('Reservation', reservationSchema);