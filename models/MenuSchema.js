const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    title: String,
    description: String 
})

module.exports = mongoose.model('Menu', menuSchema);