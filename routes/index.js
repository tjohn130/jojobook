var express = require('express');
var orm = require('../models/orm');
var cheerio = require('cheerio');
var axios = require('axios');
var dataCard = require('../models/schema');

var path = require('path');

var router = express.Router();

router.get("/",function(req,res){
    res.render("index",{title: "Welcome to The Jojo Book"});
})

router.get("/s",function(req,res){
    var data = orm.createfromScrape()
    res.render("scrape", {data})
})

module.exports = router;