define([
	"jquery",
	"underscore",
	"backbone",
	"router",
	"tools/contentLocator",
	], function($, _, Backbone, Router, contentLocator){
		var initialize = function(){
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
		}
	
		return {
			initialize: initialize
		};
	}
);