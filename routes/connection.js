var mongoose = require('mongoose');
require('dotenv').config()

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

module.exports = mongoose;
