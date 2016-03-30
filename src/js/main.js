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

	$("#menu-friends").click(function() {
		activateMenu("#menu-friends");
		switchContent(".content-friends");
		$(".menu").animate({"left":"-1000px"}, "fast");
	});
	
	$("#menu-home").click(function() {
		activateMenu("#menu-home");
		switchContent(".content-home");
		$(".menu").animate({"left":"-1000px"}, "fast");
	});

	$("#menu-commit").click(function() {
		activateMenu("#menu-commit");
		switchContent(".content-commit");
		$(".menu").animate({"left":"-1000px"}, "fast");
	});

	$("#menu-places").click(function() {
		activateMenu("#menu-places");
		switchContent(".content-places");
		$(".menu").animate({"left":"-1000px"}, "fast");
	});

});

function activateMenu(id) {

	if($("#menu-home").hasClass("active")) {
		$("#menu-home").removeClass("active");
	}
	if($("#menu-friends").hasClass("active")) {
		$("#menu-friends").removeClass("active");
	}
	if($("#menu-places").hasClass("active")) {
		$("#menu-places").removeClass("active");
	}
	if($("#menu-commit").hasClass("active")) {
		$("#menu-commit").removeClass("active");
	}

	$(id).addClass("active");

}

function switchContent(id) {

	$(".content-home").css("display", "none");
	$(".content-commit").css("display", "none");
	$(".content-friends").css("display", "none");
	$(".content-places").css("display", "none");

	$(id).css("display", "inline");
}