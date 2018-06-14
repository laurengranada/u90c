//dependencies
var cheerio = require("cheerio");
var request = require("request");

var scrape = function(callback){
	//scrapes Gooners crowdrise link
	request('https://www.crowdrise.com/o/en/campaign/austin-goonersupperninety', function (error, response, html) {
	  if (!error && response.statusCode == 200) {
	    var $ = cheerio.load(html);
	    //empty array to save gooner data
	    var goonersData = [];
	    var raisedGoon = $('.cta-title').children().first().text();
	    //object we will push to gooner data array
	    // var dataToAdd = {
	    // 	amount: raisedAmt
	    // };
	    goonersData.push(raisedGoon);
	    };
	  callback(goonersData[goonersData.length - 1]);
	});

	// scrapes Austin Reds crowdrise link
	request('https://www.crowdrise.com/o/en/campaign/austin-reds-and-upper-ninety', function (error, response, html) {
	  if (!error && response.statusCode == 200) {
	    var $ = cheerio.load(html);
	    //empty array to save reds data
	    var redsData = [];
	    var raisedRed = $('.cta-title').children().first().text();
	    //object we will push to reds data array
	    redsData.push(raisedRed);
	  };
	  callback(redsData[redsData.length - 1]);
	});

	//scrapes Austin Spurs crowdrise link
	request('https://www.crowdrise.com/o/en/campaign/austin-spurs-and-upper-ninety', function (error, response, html) {
	  if (!error && response.statusCode == 200) {
	    var $ = cheerio.load(html);
	    //empty array to save spurs data
	    var spursData = [];
	    var raisedSpur = $('.cta-title').children().first().text();
	    //object we will push to reds data array
	    spursData.push(raisedSpur);
	  };
	  callback(spursData[spursData.length - 1]);
	});

	scrapes Austin Manchester crowdrise link
	request('https://www.crowdrise.com/o/en/campaign/austinmanchesterunitedupperninety', function (error, response, html) {
	  if (!error && response.statusCode == 200) {
	    var $ = cheerio.load(html);
	    //empty array to save 
	    var unitedData = [];
	    var raisedAmt = $('.cta-title').children().first().text();
	    //object we will push to united data
	    var dataToAdd = {
	    	amount: raisedAmt
	    };
	    unitedData.push(dataToAdd);
	  };
	  callback(unitedData[unitedData.length - 1]);
	});
};

//export for other files to use function
module.exports = scrape;