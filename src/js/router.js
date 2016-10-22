define(['jquery', 'underscore', 'backbone', 'views/home', 'views/secondary', 'views/menu'], 
	function($, _, Backbone, homeView, secondaryView, menuView){
		var AppRouter = Backbone.Router.extend({
			routes: {
				// Define some URL routes
				'': 'showHome',
				'/': 'showHome',
				'live': 'showLive',
				
				// Default
				"*actions": 'defaultAction'
			},
			
			showHome: function(){
				this.showMenu();
				homeView.render();
			},

			showLive: function() {
				this.showMenu();
				document.getElementById('main-content').innerHTML = JST['src/js/templates/live.html']();

				var width = (window.innerWidth * 0.8),
					height = (width * 0.6);

				if (width > 1000) {
					width = 1000;
					height = 600;
				}

				document.getElementById('live').innerHTML = '<iframe src="//player.vimeo.com/hubnut/album/4186555?color=44bbff&amp;background=000000&amp;slideshow=0&amp;video_title=1&amp;video_byline=0" width="'+ width +'" height="'+ height +'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
			},

			showMenu: function() {
				menuView.render();
			},
			
			defaultAction: function(actions){
				this.showMenu();
				secondaryView.render();
			}
		});
		
		var initialize = function(){
			var app_router = new AppRouter();
			Backbone.history.start({
				pushState: true
			});
		};
		
		return {
			initialize: initialize
		};
	}
);