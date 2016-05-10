<?php

	include_once 'config.php';

	function doGraphRequest($request, $parameter) {

		$curl = curl_init();

		curl_setopt($curl, CURLOPT_URL, 'https://graph.facebook.com' . $request . '?' . $parameter);

		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

		$response = curl_exec($curl);

		curl_close($curl);

		return $response;
	} 

	function getAppToken() {

		$response = doGraphRequest('/oauth/access_token', 'client_id=' . APP_ID . '&client_secret=' . APP_SECRET . '&grant_type=client_credentials');

		return str_replace('access_token=', '', $response);

	}

	function isTokenValid($access_token) {

		$token = getAppToken();

		$response = doGraphRequest('/debug_token', 'input_token=' . $access_token . '&access_token=' . $token);

		$json = json_decode($response);

		return $json->data->is_valid;
	}

?>