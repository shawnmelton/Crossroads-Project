define([
	"jquery",
	"underscore",
	"backbone",
	'text!templates/home.html'
	], function($, _, Backbone, homeHTML){
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
				
				$("div.subcontent > div").hover(function(){
					if($(this).find(".animation").length) { // if an animation is already happening, cancel.
						return;
					}
				
					var bar = $(this).find(".bar");
					bar.append('<div class="animation"></div>');
					bar.find(".animation").css("background-color", bar.css("border-left-color")).animate({width: bar.width() +"px"}, 500);
				}, function() {
					var bar = $(this).find(".bar");
					bar.find(".animation").css("background-color", bar.css("border-left-color")).animate({width: "0px"}, 500, function(){
						bar.find(".animation").remove();
					});
				});
			}
		});
		
		// Our module now returns an instantiated view
		// Sometimes you might return an un-instantiated view e.g. return projectListView
		return new homeView;
	}
);