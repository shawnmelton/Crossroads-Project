<?php
class Cache {
    public static function get($file) {
        return self::has($file) ? file_get_contents(self::getFilePath() . $file) : false;
    }

    public static function getFilePath() {
        return dirname(dirname(__FILE__)) .'/cache/';
    }

    public static function getAllFiles() {
        return glob(self::getFilePath() .'*');
    }

    public static function has($file) {
        return file_exists(self::getFilePath() . $file);
    }

    public static function save($file, $string) {
        $myfile = fopen(self::getFilePath() . $file, 'w');
        fwrite($myfile, $string);
        fclose($myfile);
    }

    public static function clear() {

    }
}