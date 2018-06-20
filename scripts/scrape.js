//dependencies

var cheerio = require("cheerio");
var rp = require('request-promise');

var scrape = function(callback){
	//scrapes Gooners crowdrise link
	return Promise.all([
		rp('https://www.crowdrise.com/o/en/campaign/austin-goonersupperninety')
			.then(html => {
				var $ = cheerio.load(html);
				return $('.cta-title').children().first().text();
			}),
		rp('https://www.crowdrise.com/o/en/campaign/austin-reds-and-upper-ninety')
			.then(html => {
				var $ = cheerio.load(html);
				return $('.cta-title').children().first().text();
			}),
		rp('https://www.crowdrise.com/o/en/campaign/austin-spurs-and-upper-ninety')
			.then(html => {
				var $ = cheerio.load(html);
				return $('.cta-title').children().first().text();
			}),
		// rp('https://www.crowdrise.com/o/en/campaign/austinmanchesterunitedupperninety')
		// 	.then(html => {
		// 		var $ = cheerio.load(html);
		// 		return $('.cta-title').children().first().text();
		// 	})
	])
	.then(data => {
		return {
			goonersAmount: data[0],
			redsAmount: data[1],
			spursAmount: data[2],
			// manuAmount: data[3]
		};
	});
};

//export for other files to use function
module.exports = scrape;