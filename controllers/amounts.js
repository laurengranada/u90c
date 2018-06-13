var scrape = require("../scripts/scrape");

module.exports = {
	fetch: function(callback){
		//run scrape function
		scrape(function(data){
			console.log(goonersData);
		});
	}
};