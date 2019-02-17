var mongojs = require('mongojs');
var express = require('express');
var exphbs = require('express-handlebars');
var router = require('./routes/index');
var mongoose = require('mongoose');
require('dotenv').config()

/*process.env.MONGODB_URI ||*/
var MONGODB_URI =  "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI,{ useNewUrlParser: true })

var app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/', router);


app.listen(3000, function(){
    console.log("App running on port 3000!");
})