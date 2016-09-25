<?php
class ApiRequest {
    private $fileName;

    public function __construct($relativeUrl) {
        $this->fileName = str_replace('/', '-', $relativeUrl);
    }

    public function getResponse() {
        if (!Cache::has($this->fileName)) {
            Cache::save($this->fileName, JSON::format('Response goes here...'));
        }

        return Cache::get($this->fileName);
    }
}