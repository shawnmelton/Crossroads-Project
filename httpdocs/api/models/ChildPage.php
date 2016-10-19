<?php
class ChildPage extends Page {
    public $parentUrl;

    protected function cleanUp() {
        parent::cleanUp();

        if (strpos($this->excerpt, '&hellip;') === false) {
            $this->excerpt = $this->content;
        } else {
            $this->excerpt = str_replace('&#8220;'. $this->title .'&#8221;', '&#8220;'. $this->title .'&#8221;', $this->excerpt);
            $this->excerpt = str_replace($this->parentUrl, $this->parentUrl, $this->excerpt);
            $this->excerpt = str_replace('&hellip;', '&hellip;<br><br>', $this->excerpt);
        }

        $this->content = '';
    }

    public function setParentUrl($url) {
        $this->parentUrl = $url;
    }
}