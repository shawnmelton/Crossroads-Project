define([
	"jquery",
	"underscore",
	"backbone",
	"tools/cycle.jquery",
	'text!templates/home.html'
	], function($, _, Backbone, jCycle, homeHTML){
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
				
				// Banners
				$("#banners").cycle({
					delay: -6000
				});
			}
		});
		
		return new homeView;
	}
);