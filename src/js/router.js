define(['jquery', 'underscore', 'backbone', 'views/home', 'views/secondary', 'views/menu', 'tools/events'], 
	function($, _, Backbone, homeView, secondaryView, menuView, Events){
		var AppRouter = Backbone.Router.extend({
			routes: {
				// Define some URL routes
				'': 'showHome',
				'/': 'showHome',
				'sermons': 'showLive',
				
				// Default
				"*actions": 'defaultAction'
			},
			
			showHome: function(){
				this.showMenu();
				homeView.render();
			},

			showLive: function() {
				this.showMenu();

				var width = (window.innerWidth * 0.8),
					height = (width * 0.6);

				if (width > 1000) {
					width = 1000;
					height = 600;
				}

				document.getElementById('main-content').innerHTML = JST['src/js/templates/live.html']({
					watch: '<iframe src="//player.vimeo.com/hubnut/album/4186555?color=44bbff&amp;background=000000&amp;slideshow=0&amp;video_title=1&amp;video_byline=0" width="'+ width +'" height="'+ height +'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
					listen: '<iframe src="https://crcnorfolk.sermon.net/embed" scrolling="no" frameborder="0" style="width: '+ width +'px; min-height: 2000px; overflow: hidden;" allowTransparency="true" allowfullscreen></iframe>'
				});

				Events.setGlobal();
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
			window.appRouter = new AppRouter();
			Backbone.history.start({
				pushState: true
			});
		};
		
		return {
			initialize: initialize
		};
	}
);