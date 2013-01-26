define([
	"jquery",
	"underscore",
	"backbone",
	'text!templates/404.html'
	], function($, _, Backbone, pageNotFoundHTML){
		var pageNotFoundView = Backbone.View.extend({
			content: $("body > div"),
			render: function(){
				// Using Underscore we can compile our template with data
				var data = {};
				var html = _.template(pageNotFoundHTML, data);
				this.content.html(html);
				
				// Apply styles for home page.
				$("body").attr("class", "secondary learn");
				$("#logo > img").attr("src", "/img/logo-orange-small.png");
				
				// Deactivate links.
				$("header > nav > a").removeClass("active");
			}
		});
		
		return new pageNotFoundView;
	}
);