const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    eurTo: String,
    taux: Number,
},
    {
        collection: 'Devises'
    }
);

const Devise = mongoose.model('Devise', Schema);


module.exports = Devise;