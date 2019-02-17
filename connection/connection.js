
var mongoose = require('mongoose');
require('dotenv').config()

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

var connected = mongoose.connect(MONGODB_URI,{ useNewUrlParser: true })
module.exports = connected