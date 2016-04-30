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
				},/*{
					url: '/spring-picnic',
					img: '/img/picnic-banner.png'
				},*/{
					url: '/the-camp',
					img: '/img/camp-banner.png'
				},{
					url: '/starting-point',
					img: '/img/starting-point.png'
				},{
					url: '/women',
					img: '/img/CRwomen_banner.gif'
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