$('.menu a[href="#menu"]').addClass('fa fa-bars fa-3x');
$('.menu a[href="#menuclose"]').addClass('fa fa-close fa-3x');

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