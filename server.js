var axios = require('axios');
var cheerio = require('cheerio');
var path = require('path');
var mongoose = require('mongoose');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.use(express.static("public"));

app.get("/",function(req,res){
    res.send("Hello");

})

app.get("/s",function(req,res){

    axios.get("https://otakumode.com/news/label/JoJo%27s%20Bizarre%20Adventure").then(function(response){
        
    var $ = cheerio.load(response.data);

    var results = []

    $("article.p-article-list__item").each(function(i,element){
        var link = $(element).children("a").attr("href");
        var title = $(element).children("div.p-article-list__body").children("h3").children("a").text()
        var summary = $(element).children("div.p-article-list__body").children("div.p-article__meta").children("p").text()
        results.push(
            {
            title: title,
            link: link,
            summary: summary
        });
    })
    console.log(results)
    })
    

    res.send("Check Console Log")
})

app.listen(3000, function(){
    console.log("App running on port 3000!");
})