<?php
class Page {
    public $title;
    public $content;

    private function cleanUp() {
        $this->content = str_replace('http://www.crcnorfolk.com/content', 'http://www.crcnorfolk.com', $this->content);
    }

    public function map($jsonObject) {
        $this->title = $jsonObject->title;
        $this->content = $jsonObject->content;
        $this->cleanUp();
    }
}