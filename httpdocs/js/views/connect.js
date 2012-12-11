define([
		"jquery",
		"underscore",
		"backbone",
		'text!templates/connect.html'
	], function($, _, Backbone, connectHTML){
		var connectView = Backbone.View.extend({
			content: $("body > div"),
			render: function(){
				// Using Underscore we can compile our template with data
				var data = {};
				var html = _.template(connectHTML, data);
				this.content.html(html);
				
				// Apply styles for home page.
				$("body").attr("class", "secondary connect");
				$("#logo > img").attr("src", "/img/logo-green.png");
				
				// Activate link.
				$("header > nav > a").removeClass("active");
				$("header > nav > a.second").addClass("active");
			}
		});
		
		// Our module now returns an instantiated view
		// Sometimes you might return an un-instantiated view e.g. return projectListView
		return new connectView;
	}
);