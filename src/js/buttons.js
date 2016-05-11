function fblogin() {

	FB.login(function(response) {
		statusChangeCallback(response);
	});

}