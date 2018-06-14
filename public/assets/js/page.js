// javascript page
$(document).ready(function(){	
	$(document).on("click", ".refresh-scrape", handleScrape);


	// start();

	// function start(){
	// 	raisedGooners.empty();
	// };

	function renderGooners(data1){
		var raisedGooners = $('#raised-gooners');
		raisedGooners.html(data1);
		console.log(raisedGooners);
	};

	function handleScrape(){
		$.get("/fetch")
		.then(function(data){
			renderGooners(data);
		});
	};
});


