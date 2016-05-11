function statusChangeCallback(response) {

	if(response.status === 'connected') {
		window.localStorage.setItem('jem_access_token', response.authResponse.accessToken);
		window.localStorage.setItem('jem_fblogin', true);
	} else {
		window.localStorage.setItem('jem_fblogin', false);
	}

	loadContent();

}

function checkLoginState() {
	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);
	});
}

window.fbAsyncInit = function() {
	FB.init({

		appId: '1572711656284707',
		cookie: true,
		xfbml: true,
		version: 'v2.6'

	});

	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);
	});

};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "js/facebook-sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));