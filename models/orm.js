var cheerio = require('cheerio');
var axios = require('axios');
const Card = require('./schema');
var mongojs = require('mongojs');


var orm = {
    create: function(dataobj){
        Card.create(dataobj).then(function(savedobj){
            console.log(savedobj);
        }).catch(function(err){
            console.log(err.message);
        })
    },
    createfromScrape: function(){
        var obj = {
            data: []
        }
    
            axios.get("https://otakumode.com/news/label/JoJo%27s%20Bizarre%20Adventure").then(function(response){  
        var $ = cheerio.load(response.data);

        $("article.p-article-list__item").each(function(i,element){
            var link = $(element).children("a").attr("href");
            var title = $(element).children("div.p-article-list__body").children("h3").children("a").text()
            var summary = $(element).children("div.p-article-list__body").children("div.p-article__meta").children("p").text()
            var srcImage = $(element).children("div.p-article-list__thumb").children("div.p-article__figure-inner").find("img").attr("src")
            obj.data.push(
                {
                title: title,
                link: link,
                src: srcImage,
                summary: summary
                });
            Card.create({title: title, dataLink: link, imgLink: srcImage,summary: summary})
            })
            console.log(obj.data)
        })
        return obj;
    }
    
}

module.exports = orm;