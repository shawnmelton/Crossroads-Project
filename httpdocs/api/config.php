<?php
define('DEBUG', false);

if (DEBUG) { // Gzip output.
    ob_start('ob_gzhandler');
} else { // Turn on error reporting in development environment.
    ini_set('display_errors', 1);
    error_reporting(-1);
}

// Set default timezone
date_default_timezone_set('America/New_York');
putenv('TZ=US/Eastern');

// Class autoloader
function __autoload($className) {
    foreach (array('tools', 'models') as $folder) {
        $class = dirname(__FILE__) .'/'. $folder .'/'. $className .'.php';
        if (file_exists($class) ) {
            require_once($class);
            return;
        }
    }

    throw new Exception('Unable to find file '. $className .'.php.', E_USER_ERROR);
}