define([
	"jquery",
	"backbone",
	"tools/cycle.jquery",
	'templates/html.jst'
	], function($, Backbone, jCycle, htmlJST){
		var homeView = Backbone.View.extend({
			el: "#main-content",

			render: function(){
				if(this.$el.html() === null) { // IE fix.
					this.$el = $("#main-content");
				}

				this.$el.html(JST['src/js/templates/home.html']({}));
				
				// Apply styles for home page.
				$("body").attr("class", "home");
				$("#logo > img").attr("src", "/img/logo.png");
				
				// Banners
				$("#banners").cycle({
					delay: -6000
				});
			}
		});
		
		return new homeView();
	}
);