define([
	"jquery",
	"underscore",
	"backbone",
	'text!templates/find.html'
	], function($, _, Backbone, findHTML){
		var findView = Backbone.View.extend({
			content: $("body > div"),
			render: function(){
				// Using Underscore we can compile our template with data
				var data = {};
				var html = _.template(findHTML, data);
				this.content.html(html);
				
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
		return new findView;
	}
);