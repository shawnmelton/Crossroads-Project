<?php
class Menu {
    private $links;

    public function __construct($json) {
        $this->links = $this->cleanUp(json_decode($json));
    }

    private function cleanUp($array) {
        $arrayIndices = [];
        foreach ($array as $index => $item) {
            if (is_array($item)) {
                $arrayIndices[] = $index;
                $array[$index] = $this->cleanUp($item);
            } else {
                $array[$index]->links = [];
            }
        }

        $arrayIndices = array_reverse($arrayIndices);
        foreach ($arrayIndices as $index) {
            $array[$index - 1]->links = $array[$index];
            unset($array[$index]);
        }

        return array_values($array); // Resets the keys after we just unset some of the keys.
    }

    public function getLinks() {
        return json_encode((array) $this->links);
    }
}