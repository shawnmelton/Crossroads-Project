<?php
require_once('config.php');

$response = null;
if (isset($_GET['url']) && preg_match('/^(?:[^\/]*(?:\/(?:\/[^\/]*\/?)?)?([^?]+)(?:\??.+)?)$/i', $_GET['url']) !== false) {
    $request = new ApiRequest($_GET['url']);
} else if (isset($_GET['category']) && preg_match('/^[a-z,\-]+$/i', $_GET['category'])) {
    $request = new ApiRequest('category'. $_GET['category']);
} else {
    JSON::error();
}

header('Content-Type: application/json');
echo $request->getResponse();
exit;