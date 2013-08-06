define([
	"jquery",
	"backbone",
	'templates/html.jst'
	], function($, Backbone, htmlJST){
		var learnView = Backbone.View.extend({
			content: $("body > div"),
			render: function(){
				this.content.html(JST['src/js/templates/learn.html']({}));
				
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
		return new learnView();
	}
);