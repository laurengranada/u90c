//dependencies
var express = require("express");
// var mongoose = require("mongoose");
// var mongojs = require("mongojs");
var cheerio = require("cheerio");
var request = require("request");
var bodyParser = require("body-parser");

//setting port
var PORT = process.env.PORT || 3000;
//start express
var app = express();
var router = express.Router();
app.use(express.static("public"));
app.use(router);

//set up database
// var db = process.env.MONGODB_URI || "mongodb://localhost/unc";
// mongoose.Promise = global.Promise;
// // Database configuration with mongoose
// mongoose.connect(db, function(error){
// 	if (error){
// 		console.log(error);
// 	} else{
// 		console.log("mongoose connection is successful!");
// 	}
// });

//scrapes Gooners crowdrise link
request('https://www.crowdrise.com/o/en/campaign/austin-goonersupperninety', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    var goonersData = $('.cta-title').children().first().text();
      console.log("Gooners: " + goonersData);
  }
});

//scrapes Austin Reds crowdrise link
request('https://www.crowdrise.com/o/en/campaign/austin-reds-and-upper-ninety', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    var redsData = $('.cta-title').children().first().text();
      console.log("Austin Reds: " + redsData);
  }
});

//scrapes Austin Spurs crowdrise link
request('https://www.crowdrise.com/o/en/campaign/austin-spurs-and-upper-ninety', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    var spursData = $('.cta-title').children().first().text();
    $('#raised-spurs').append(spursData);
      console.log("Austin Spurs: " + spursData);

  }
});

app.listen(PORT, function() {
  console.log("App running on port" + PORT);
});

//directs server to homepage
module.exports = function(router){
	router.get("/", function(req, res){
		res.render("public/index.html");
	});
}