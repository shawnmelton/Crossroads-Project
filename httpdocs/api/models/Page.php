<?php
class Page {
    public $title;
    public $content;
    public $children;
    public $excerpt;
    public $url;

    protected function cleanUp() {
        $wpUrl = 'http://crcnorfolk.com/content';
        $siteUrl = 'http://crcnorfolk.com';

        $this->content = str_replace($wpUrl, $siteUrl, $this->content);
        $this->url = str_replace($wpUrl, $siteUrl, $this->url);
        $this->excerpt = str_replace($wpUrl, $siteUrl, $this->excerpt);

        foreach($this->children as $index => $child) {
            $childPage = new ChildPage();
            $childPage->setParentUrl($this->url);
            $childPage->map($child);
            $this->children[$index] = $childPage;
        }
    }

    public function map($jsonObject) {
        $this->title = $jsonObject->title;
        $this->content = $jsonObject->content;

        $this->children = isset($jsonObject->children) ? $jsonObject->children : [];
        $this->url = isset($jsonObject->url) ? $jsonObject->url : '';
        $this->excerpt = isset($jsonObject->excerpt) ? $jsonObject->excerpt : '';
        $this->cleanUp();
    }
}