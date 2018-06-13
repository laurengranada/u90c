// javascript page
$(document).ready(function(){	
	var raisedGooners = $('#raised-gooners');
	$(document).on("click", ".refresh-scrape", handleScrape);
	// (raisedGooners).append("$50");

	start();

	function start(){
		raisedGooners.empty();
		$.get("/fetch")
		.then(function(data){
			if (data && data.length) {
          		renderGooners(data);
        	};
		});
	};

	function renderGooners(goonersData){

	};

	function handleScrape(){
		$.get("/fetch")
		.then(function(data){
			start();
		});
	};
});


