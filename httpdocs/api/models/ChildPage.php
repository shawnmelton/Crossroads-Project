<?php
class ChildPage extends Page {
    protected function cleanUp() {
        parent::cleanUp();

        $this->content = '';
    }   
}