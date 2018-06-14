// javascript page
$(document).ready(function(){	
	$(document).on("click", ".refresh-scrape", handleScrape);


	// start();

	// function start(){
	// 	raisedGooners.empty();
	// };

	function renderGooners(data){
		var raisedGooners = $('#raised-gooners');
		raisedGooners.html(data.goonersAmount);
	};
	function renderReds(data){
		var raisedGooners = $('#raised-reds');
		raisedGooners.html(data.redsAmount);
	};
	function renderSpurs(data){
		var raisedGooners = $('#raised-spurs');
		raisedGooners.html(data.spursAmount);
	};
	function renderUni(data){
		var raisedGooners = $('#raised-united');
		raisedGooners.html(data.manuAmount);
	};

	function handleScrape(){
		$.get("/fetch")
		.then(function(data){
			renderGooners(data);
			renderReds(data);
			renderSpurs(data);
			renderUni(data);

		});
	};
});


