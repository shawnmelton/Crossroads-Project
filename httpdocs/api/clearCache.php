<?php
require_once 'config.php';

$files = Cache::getAllFiles();
foreach ($files as $file){
    if (is_file($file)) {
        unlink($file);
    }
}

header('Location: http://crcnorfolk.com/content/wp-admin');
exit;