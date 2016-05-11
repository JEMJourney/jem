//Menu-System
$('.menu a[href="#menu"]').addClass('fa fa-bars fa-3x');
$('.menu a[href="#menuclose"]').addClass('fa fa-close fa-3x');
var menuIn = $('.menu').html();
$('.menu').html('<h1>Menü</h1>' + menuIn);

$('.menu')
	.on('click', 'a', function(event) {

		var href = $(this).attr('href');

		event.stopPropagation();
		event.preventDefault();

		if(href == '#menu') {
			openMenu();
			return;
		}

		if(href == '#menuclose') {
			closeMenu();
			return;
		}

		if(href == '#logout') {
			logout();
			closeMenu();
			return;
		}

	});

function openMenu() {
	$('.menu a[href="#menu"]').css('visibility', 'hidden');
	$('.menu a[href="#menuclose"]').css('visibility', 'visible');
	$('.menu').css('visibility', 'visible').css('display', 'none');

	$('.menu').animate({ width: 'toggle'}, 350);
}

function closeMenu() {
	$('.menu').animate({ width: 'toggle'}, 350, "linear", function() {
		$('.menu').css('visibility', 'hidden');
		$('.menu a[href="#menuclose"]').css('visibility', 'hidden');
		$('.menu').css('display', 'block');
		$('.menu a[href="#menu"]').css('visibility', 'visible');
	});
}

$('body')
	.on('click', 'a', function(event) {

		var href = $(this).attr('href');

		if(href == '#menu') {
			return;
		}

		if(href == '#menuclose') {
			return;
		}

		event.stopPropagation();
		event.preventDefault();

		loadContent(href);

	});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function loadContent(p) {
	if(!p) {
		p = getParameterByName("p");
	}

	if(window.localStorage.getItem('jem_fblogin') == 'true') {

		$.post("server/resources.php", { pid: 'page', page: p, access_token: window.localStorage.getItem('jem_access_token'), fblogin: 'true'}, function(data, status) {
			if(data == "invalid") {
				alert("error");
			} else {
				$(".content").fadeOut(400, function() {
					$(".content").html(data);
					$(".content").fadeIn(400);
				});
			}
		});

		$.post('server/resources.php', { pid: 'menu', access_token: window.localStorage.getItem('jem_access_token'), fblogin: 'true' }, function(data, status) {

			$('.menu .nav').html(data);

		});

	} else {

		$.post("server/resources.php", { pid: 'page', page: p, access_token: window.localStorage.getItem('jem_access_token')}, function(data, status) {
			if(data == "invalid") {
				alert("error");
			} else {
				$(".content").fadeOut(400, function() {
					$(".content").html(data);
					$(".content").fadeIn(400);
				});
			}
		});

		$.post('server/resources.php', { pid: 'menu', access_token: window.localStorage.getItem('jem_access_token') }, function(data, status) {

			$('.menu .nav').html(data);

		});


	}

}

function logout() {
	check = window.localStorage.getItem('jem_fblogin');
	window.localStorage.jem_fblogin = undefined;
	window.localStorage.accessToken = undefined;
	if(check == 'true') {
		FB.logout(function(response) {
			statusChangeCallback(response);
		});
	} else {
		loadContent();
	}
}