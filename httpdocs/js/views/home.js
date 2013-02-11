define([
	"jquery",
	"underscore",
	"backbone",
	"tools/homeBanners",
	'text!templates/home.html'
	], function($, _, Backbone, homeBanners, homeHTML){
		var homeView = Backbone.View.extend({
			content: $("body > div"),
			render: function(){
				// Using Underscore we can compile our template with data
				var data = {};
				var html = _.template(homeHTML, data);
				this.content.html(html);
				
				// Apply styles for home page.
				$("body").attr("class", "home");
				$("#logo > img").attr("src", "/img/logo.png");

				// Add banner rotation
				if(!homeBanners.isRotating()) {
					homeBanners.startRotation();
				}
			}
		});
		
		// Our module now returns an instantiated view
		// Sometimes you might return an un-instantiated view e.g. return projectListView
		return new homeView;
	}
);