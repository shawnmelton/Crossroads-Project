define([
	"jquery",
	"backbone",
	'templates/html.jst'
	], function($, Backbone, htmlJST){
		var findView = Backbone.View.extend({
			el: "#main-content",

			render: function(){
				if(this.$el.html() === null) { // IE fix.
					this.$el = $("#main-content");
				}

				this.$el.html(JST['src/js/templates/find.html']({}));
				
				// Apply styles for home page.
				$("body").attr("class", "secondary find");
				$("#logo > img").attr("src", "/img/logo-orange-small.png");
				
				// Activate link.
				$("header > nav > a").removeClass("active");
				$("header > nav > a.third").addClass("active");
			}
		});
		
		// Our module now returns an instantiated view
		// Sometimes you might return an un-instantiated view e.g. return projectListView
		return new findView();
	}
);