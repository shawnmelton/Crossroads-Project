define([
	"jquery",
	"backbone",
	'templates/html.jst'
	], function($, Backbone, htmlJST){
		var pageNotFoundView = Backbone.View.extend({
			el: "#main-content",

			render: function(){
				if(this.$el.html() === null) { // IE fix.
					this.$el = $("#main-content");
				}

				this.$el.html(JST['src/js/templates/404.html']({}));

				// Apply styles for home page.
				$("body").attr("class", "secondary learn");
				$("#logo > img").attr("src", "/img/logo-orange-small.png");
				
				// Deactivate links.
				$("header > nav > a").removeClass("active");
			}
		});
		
		return new pageNotFoundView();
	}
);