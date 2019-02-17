var mongoose = require('mongoose')

var dataSchema = new mongoose.Schema({

    title: String,
    dataLink: String,
    imgLink: String,
    summary: String,
    comment: Array
})

const dataCard = mongoose.model('dataCard',dataSchema);

module.exports = dataCard;