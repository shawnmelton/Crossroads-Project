<?php
require_once 'config.php';

$files = Cache::getAllFiles();
foreach ($files as $file){
    if (is_file($file)) {
        unlink($file);
    }
}

header('Expires: Sun, 01 Jan 2014 00:00:00 GMT');
header('Cache-Control: no-store, no-cache, must-revalidate');
header('Cache-Control: post-check=0, pre-check=0', false);
header('Pragma: no-cache');
header('Location: http://crcnorfolk.com/content/wp-admin', false, 302);
exit;