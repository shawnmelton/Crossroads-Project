<?php
class ApiRequest {
    private $fileName;
    private $relativeUrl;

    public function __construct($relativeUrl) {
        $this->fileName = str_replace('/', '-', ltrim($relativeUrl, '/'));
        $this->relativeUrl = '/content'. $relativeUrl .'?json=1&children=1';
    }

    private function getProtocol() {
        return (isset($_SERVER['SERVER_PROTOCOL']) && strpos($_SERVER['SERVER_PROTOCOL'], 'https') !== false) ? 'https' : 'http';
    }

    private function generate() {
        $curl = curl_init();

        curl_setopt($curl, CURLOPT_URL, 'http://crcnorfolk.com' . $this->relativeUrl);
        // curl_setopt($curl, CURLOPT_URL, $this->getProtocol() .'://'. $_SERVER['HTTP_HOST'] . $this->relativeUrl);
        curl_setopt($curl, CURLOPT_HEADER, false);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($curl, CURLOPT_TIMEOUT, 60);
        curl_setopt($curl, CURLOPT_VERBOSE, true);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
        $output = curl_exec($curl);

        if (curl_errno($curl) > 0 || strpos($output, 'DOCTYPE') !== false || strpos($output, 'title') === false) {
            $page = new stdClass();
            $page->title = 'Page Not Found';
            $page->content = '<p>Oops! It looks like the page you are looking for doesn\'t exist.  Please checkout our homepage by clicking this link: <a href="/">http://crcnorfolk.com</a></p>';
            $page->error_message = curl_error($curl);
            $page->error_number = curl_errno($curl);
        } else {
            $output = json_decode($output);
            $page = new Page();
            $page->map($output->page);
        }

        return $page;
    }

    private function generateMockPage() {
        $page = new Page();

        $mock = new stdClass();
        $mock->title = 'FIND US';
        $mock->content = '<a href="http://maps.google.com/?q=1127%Surrey%Crescent%Norfolk%VA%23508" target="_blank" id="mapImg"><img src="/img/map.png" alt="Google Map > CrossRoads Church"></a><p>CrossRoads Church is located in the Larchmont area of Norfolk, Virginia. Our address is <strong>1127 Surrey Crescent Norfolk, VA 23508</strong> and our services are 9 AM and 11 AM on Sunday mornings. You may click the image to the right in order to pull up driving directions using Google Maps.</p><p>CrossRoads does not have an official parking lot which is typical of most places in Norfolk. We invite newcomersand members with young kids to use street parking along Surrey Crescent. If you get there late, you may also findparking available along Jamestown Crescent and Monroe Place.</p><br class="clear"></section><section class="alternate"><a id="contact"></a><h2>Contact Us</h2><br><div><img src="/img/kevin-contact.png" alt="Kevin Tremper"><div><h4>Kevin Tremper</h4><strong>Senior Pastor</strong><table><tbody><tr><td><small>phone</small></td><td>&nbsp;757.961.0350</td></tr><tr><td><small>email</small></td><td>&nbsp;<a href="mailto:kevin@crossroadsnorfolk.com">kevin@crossroadsnorfolk.com</a></td></tr></tbody></table></div></div><div class="alternate-right"><img src="/img/clark-contact.png" alt="Clark Taylor"><div><h4>Clark Taylor</h4><strong>Administrative Pastor</strong><table><tbody><tr><td><small>phone</small></td><td>&nbsp;757.961.0350</td></tr><tr><td><small>email</small></td><td>&nbsp;<a href="mailto:clark@crossroadsnorfolk.com">clark@crossroadsnorfolk.com</a></td></tr></tbody></table></div></div><br class="clear"><div><img src="/img/heather-contact.png" alt="Heather Stemler"><div><h4>Heather Stemler</h4><strong>Children\'s and Youth Director</strong><table><tbody><tr><td><small>phone</small></td><td>&nbsp;757.961.0350</td></tr><tr><td><small>email</small></td><td>&nbsp;<a href="mailto:heather@crossroadsnorfolk.com">heather@crossroadsnorfolk.com</a></td></tr></tbody></table></div></div><div class="alternate-right"><img src="/img/coming-soon-contact.png" alt="Hannah Borny"><div><h4>Hannah Borny</h4><strong>Administrative Assistant</strong><table><tbody><tr><td><small>phone</small></td><td>&nbsp;757.961.0350</td></tr><tr><td><small>email</small></td><td>&nbsp;<a href="mailto:hannah@crossroadsnorfolk.com">hannah@crossroadsnorfolk.com</a></td></tr></tbody></table></div></div><br class="clear"><div class="alternate"><img src="/img/coming-soon-contact.png" alt="Ashley Lane"><div><h4>Ashley Lane</h4><strong>Bookkeeper</strong><table><tbody><tr><td><small>phone</small></td><td>&nbsp;757.961.0350</td></tr><tr><td><small>email</small></td><td>&nbsp;<a href="mailto:ashley@crossroadsnorfolk.com">ashley@crossroadsnorfolk.com</a></td></tr></tbody></table></div></div><br class="clear"></section><section><div><h3>Facilities Request Form</h3>Want to use our facility for your event? Please download our Facilities Request Form and email it to <a href="mailto:clark@crossroadsnorfolk.com">clark@crossroadsnorfolk.com</a> when you have filled in the requested information and signed the form. Please contact Clark Taylor with any questions or concerns.<br><br><a href="/docs/FacilitiesRequestForm.doc" target="_blank" style="color: #48413e;"><span class="icon"></span> Download the Facilities Request Form &gt;</a></div>';

        $page->map($mock);
        return $page;
    }

    public function getResponse() {
        if (!Cache::has($this->fileName)) {
            Cache::save($this->fileName, JSON::format($this->generate()));
        }

        return Cache::get($this->fileName);
    }
}