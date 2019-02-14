var express = require('express');
var axios = require('axios');
var cheerio = require('cheerio');
var path = require('path');
var mongoose = require('mongoose');
var router = express.Router();

router.get("/",function(req,res){
    res.render("index",{title: "Welcome to The Jojo Book"});

})

router.get("/s",function(req,res){

    var results = []
    axios.get("https://otakumode.com/news/label/JoJo%27s%20Bizarre%20Adventure").then(function(response){  
    var $ = cheerio.load(response.data);

    $("article.p-article-list__item").each(function(i,element){
        var link = $(element).children("a").attr("href");
        var title = $(element).children("div.p-article-list__body").children("h3").children("a").text()
        var summary = $(element).children("div.p-article-list__body").children("div.p-article__meta").children("p").text()
        var srcImage = $(element).children("div.p-article-list__thumb").children("div.p-article__figure-inner").find("img").attr("src")
        results.push(
            {
            title: title,
            link: link,
            src: srcImage,
            summary: summary
        });
        console.log(results)
    })
    })
    res.send("Hello There")
})

module.exports = router;