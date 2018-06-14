var scrape = require("../scripts/scrape");

module.exports = {
	fetch: function(callback){
		//run scrape function
		scrape()
		.then(data => callback(null, data))
		.catch(error => callback(error))
	}
};