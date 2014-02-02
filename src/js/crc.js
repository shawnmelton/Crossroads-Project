define(['domReady', 'router', 'tools/contentLocator'], function(domReady, Router, contentLocator){
	domReady(function() {
		Router.initialize();

		/**
		 * Handle same view content clicks in the footer.  It will scroll to the 
		 * desired content.
		 */
		$("footer > ol ol a").click(function(e) {
			if(document.location.href.indexOf($(this).attr("class")) !== -1) {
				contentLocator.moveByString($(this).attr("rel"));
				e.preventDefault();
			}
		});
	});
});