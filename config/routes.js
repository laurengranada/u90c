var scrape = require("../scripts/scrape");
var amountsController = require("../controllers/amounts");

module.exports = function(router){
	//homepage
	router.get("/", function(req, res){
		res.render("home");
		console.log("home is here");
	});

	router.get("/fetch", function(req, res) {
		scrape();
		console.log(goonersData);
	});
};