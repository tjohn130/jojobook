var db = require('../connection/connection')

var dataSchema = new mongo.Schema({

    title: String,
    dataLink: String,
    imgLink: String,
    summary: String,
    comment: [String]
})

const dataCard = db.model('dataCard',dataSchema);



module.exports = dataCard;