define(['jquery', 'backbone', 'templates/html.jst'], function($, Backbone, htmlJST){
		var momsView = Backbone.View.extend({
			content: $("body > div"),
			render: function(){
				this.content.html(JST['src/js/templates/moms.html']({}));

				// Apply styles for home page.
				$("body").attr("class", "secondary connect");
				$("#logo > img").attr("src", "/img/logo-green-small.png");
				
				// Activate link.
				$("header > nav > a").removeClass("active");
			}
		});
		
		// Our module now returns an instantiated view
		// Sometimes you might return an un-instantiated view e.g. return projectListView
		return new momsView();
	}
);