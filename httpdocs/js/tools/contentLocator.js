define([
	"jquery",
	"underscore",
	"backbone"
	], function($, _, Backbone){
		var contentLocator = Backbone.Model.extend({
			/**
			 * Get the Y position of the anchor on the screen.
			 */
			getAnchorPosition: function(tag) {
				var position = false;
				$("a").each(function() {
					if($(this).attr("name") == tag) {
						var pos = $(this).position();
						position = pos.top;
					}
				});
				
				return position;
			},
		
			/**
			 * Find the URL tag that tells us where to jump to on the page.
			 * Tags will be marked by "#!"
			 */
			getUrlTag: function() {
				var parts = document.location.href.split("#!");
				if(parts.length > 1 && parts[1] != "") {
					return parts[1];
				}
				
				return false;
			},
			
			/**
			 * Move to the appropriate anchor on the view.
			 * Tag will be provided as an argument.
			 */
			moveByString: function(tag) {
				var position = this.getAnchorPosition(tag);
				if(position !== false) {
					$("body").animate({scrollTop: position}, 2000);
				}
			},
			
			/**
			 * Move to the appropriate anchor on the view.
			 * Tags will be in the url with the marker "#!"
			 */
			moveByUrl: function() {
				var tag = this.getUrlTag();
				if(tag !== false) {
					var position = this.getAnchorPosition(tag);
					if(position !== false) {
						$("body").animate({scrollTop: position}, 2000);
					}
				}
			}
		});
		
		return new contentLocator;
	}
);