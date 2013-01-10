define([
		"jquery",
		"underscore",
		"backbone",
		'text!templates/learn.html'
	], function($, _, Backbone, learnHTML){
		var learnView = Backbone.View.extend({
			content: $("body > div"),
			render: function(){
				// Using Underscore we can compile our template with data
				var data = {};
				var html = _.template(learnHTML, data);
				this.content.html(html);
				
				// Apply styles for home page.
				$("body").attr("class", "secondary learn");
				$("#logo > img").attr("src", "/img/logo-blue-small.png");
				
				// Activate link.
				$("header > nav > a").removeClass("active");
				$("header > nav > a.first").addClass("active");
			}
		});
		
		// Our module now returns an instantiated view
		// Sometimes you might return an un-instantiated view e.g. return projectListView
		return new learnView;
	}
);