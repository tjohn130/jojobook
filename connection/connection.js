var mongoose = require('mongoose');
//require('dotenv').config()

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

var db = mongoose.connect(MONGODB_URI);

module.exports = db;
