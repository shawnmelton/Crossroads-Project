define(['jquery', 'backbone'], function($, Backbone){
		var contentLocator = Backbone.Model.extend({
			/**
			 * Get the Y position of the anchor on the screen.
			 * @param String
			 */
			getAnchorPosition: function(tag) {
				var anchor = document.getElementById(tag);
				if(anchor !== null && typeof anchor === 'object') {
					var pos = $(anchor).position();
					return pos.top;
				}
				
				return false;
			},
		
			/**
			 * Find the URL tag that tells us where to jump to on the page.
			 */
			getUrlTag: function() {
				var parts = document.location.href.split('/');
				if(parts.length > 4 && parts[4] !== '') {
					return parts[4];
				}
				
				return false;
			},
			
			/**
			 * Move to the appropriate anchor on the view.
			 * Tags will be in the url
			 */
			moveByUrl: function() {
				var tag = this.getUrlTag();
				if(tag !== false) {
					var position = this.getAnchorPosition(tag);
					if(position !== false) {
						$('body').scrollTop(position);
					}
				}
			}
		});
		
		return new contentLocator();
	}
);