define([
	"jquery",
	"underscore",
	"backbone"
	], function($, _, Backbone){
		var homeHoverContent = Backbone.Model.extend({
			defaults: {
				hoverHandlersSet: false
			},

			/**
			 * Unset the handlers that currently
			 */
			areHandlersSet: function() {
				return this.get("hoverHandlersSet");
			},

			/**
			 * Set the hover states for the subcontent areas of the home page.
			 */
			setHandlers: function() {
				this.set({hoverHandlersSet: true});

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
		
		return new homeHoverContent;
	}
);