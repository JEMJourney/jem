<?php

	require_once __DIR__ . '/server.php';
	include_once 'modules/functions.php';

	if(isset($_POST['fblogin'])) {

		if(isset($_POST['access_token'])) {

			if(!isTokenValid($_POST['access_token'])) {
				if(isset($_POST['pid'])) {
					if($_POST['pid'] == 'menu') {
						include_once 'menus/default.php';
					} elseif ($_POST['pid'] == 'page') {
						if(isset($_POST['page'])) {
							if(file_exists('pages/open/' . $_POST['page'] . '.php')) {
								include_once 'pages/open/' . $_POST['page'] . '.php';
							} else {
								include_once 'pages/open/default.php';
							}
						} else {
							include_once 'pages/open/default.php';
						}
					}
				}
				die;
			}

		} else {
			die;
		}

	} else {
		
		if(!$server->verifyResourceRequest(OAuth2\Request::createFromGlobals())) {

			if(isset($_POST['pid'])) {
				if($_POST['pid'] == 'menu') {
					include_once 'menus/default.php';
				} elseif ($_POST['pid'] == 'page') {
					if(isset($_POST['page'])) {
						if(file_exists('pages/open/' . $_POST['page'] . '.php')) {
							include_once 'pages/open/' . $_POST['page'] . '.php';
						} else {
							include_once 'pages/open/default.php';
						}
					} else {
						include_once 'pages/open/default.php';
					}
				}
			}

			die;
		}

	}

	if(isset($_POST['pid'])) {
		
		if($_POST['pid'] == 'menu') {
			include_once 'menus/logged.php';
		} elseif ($_POST['pid'] == 'page') {
			if(isset($_POST['page'])) {
				if(file_exists('pages/logged/' . $_POST['page'] . '.php')) {
					include_once 'pages/logged/' . $_POST['page'] . '.php';
				} else {
					include_once 'pages/logged/default.php';
				}
			} else {
				include_once 'pages/logged/default.php';
			}
		}

	}

?>