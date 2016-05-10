<?php

	$dsn = 'mysql:dbname=jem;host=localhost';
	$username = 'root';
	$password = 'oqKdu01ii6yWstDN';

	ini_set('display_errors', 1);
	error_reporting(E_ALL);

	require_once('OAuth2/Autoloader.php');
	OAuth2\Autoloader::register();

	$storage = new OAuth2\Storage\Pdo(array('dsn' => $dsn, 'username' => $username, 'password' => $password));

	$server = new OAuth2\Server($storage);
	$server->addGrantType(new OAuth2\GrantType\ClientCredentials($storage));
	$server->addGrantType(new OAuth2\GrantType\AuthorizationCode($storage));

?>