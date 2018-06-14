var scrape = require("../scripts/scrape");

module.exports = {
	fetch: function(callback){
		//run scrape function
		scrape(function(data1){
			var goonersData = data1;
			var redsData = data2;
			callback(null, data1);
			// var redsData = data2
			console.log("gooners" + data1);
			// console.log("reds"+ data2);
		});
		// scrape(function(data2){
		// 	var redsData = data2;
		// 	callback(null, data2);
		// 	// var redsData = data2
		// 	console.log("reds" + data2);
		// 	// console.log("reds"+ data2);
		// });
	}
};