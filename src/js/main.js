jQuery(window).load(function() {

	$(".opener").click(function() {
		$(".menu").animate({"left":"0px"}, "fast");
	});

	$(".closer").click(function() {
		$(".menu").animate({"left":"-1000px"}, "fast");
	});

	$(".mobile-search").click(function() {
		if($(".content-search").css("display") == "inline") {

		} else {
			$(".content-search").css("display", "inline");
			$(".opener").css("display", "none");
			$(".brand-search").css("display", "inline");
		}
	});

	$(".brand-search").click(function() {
		$(".opener").css("display", "inline");
		$(".brand-search").css("display", "none");
		$(".content-search").css("display", "none");
	});
	
});