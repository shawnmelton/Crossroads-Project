define([
	"jquery",
	"backbone",
	"tools/cycle.jquery",
	'templates/html.jst'
	], function($, Backbone, jCycle, htmlJST){
		var homeView = Backbone.View.extend({
			el: "#main-content",

			render: function(){
				if(this.$el.html() === null) { // IE fix.
					this.$el = $("#main-content");
				}

				var banners = [{
					url: 'javascript:void(0);',
					img: '/img/logo.png'
				},,{
					url: '/fall-festival',
					img: '/img/fall-festival-banner.png'
				},{
					url: '/entrusted',
					img: '/img/EntrustedBanner.png'
				},{
					url: '/learn/sermons',
					img: '/img/podcast-banner.png'
				}];

				this.$el.html(JST['src/js/templates/home.html']({
					banners: banners
				}));
				
				// Apply styles for home page.
				$("body").attr("class", "home");
				$("#logo > img").attr("src", "/img/logo.png");
				
				// Banners
				$("#banners").cycle({
					timeout: 5000
				});
			}
		});
		
		return new homeView();
	}
);