<?php
class JSON {
     static $success = true;

    public static function error() {
        self::$success = false;
        echo self::format(null);
        exit;
    }

    public static function format($response) {
        $object = new stdClass();
        $object->status = new stdClass();
        $object->status->success = self::$success;
        $object->status->message = self::$success ? 'OK' : 'Bad Request';

        if (is_string($response) && preg_match('/^\[\{/', $response)) {
            $response = json_decode($response);
        }

        $object->response = $response;

        return json_encode($object);
    }
}