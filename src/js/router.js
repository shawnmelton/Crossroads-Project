define(['jquery', 'underscore', 'backbone', 'views/home', 'views/secondary', 'views/menu', 'views/serviceTimes', 'tools/events'], 
	function($, _, Backbone, homeView, secondaryView, menuView, serviceTimesView, Events){
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
				serviceTimesView.render();
			},

			showLive: function() {
				var wait = 0;
				if (typeof vimeowrap === 'undefined') {
					$('head').append('<script src="https://luwes.github.io/vimeowrap.js/vimeowrap.js"></script>');
					$('head').append('<script src="https://luwes.github.io/vimeowrap.js/vimeowrap.playlist.js"></script>');

					wait = 1500;
				}

				this.showMenu();

				var width = Math.floor(window.innerWidth * 0.8),
					height = Math.floor(width * 0.6);

				if (width > 1000) {
					width = 1000;
					height = 600;
				}

				// <iframe src="//player.vimeo.com/hubnut/album/4186555?color=44bbff&amp;background=000000&amp;slideshow=0&amp;video_title=1&amp;video_byline=0" width="'+ width +'" height="'+ height +'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

				document.getElementById('main-content').innerHTML = JST['src/js/templates/live.html']({
					playerHeight: Math.floor(height) +'px',
					listen: '<iframe src="https://crcnorfolk.sermon.net/embed" scrolling="no" frameborder="0" style="width: '+ width +'px; min-height: 2000px; overflow: hidden;" allowTransparency="true" allowfullscreen></iframe>'
				});

				Events.setGlobal();

				setTimeout(function() {
					vimeowrap('player').setup({
						urls: [
							'https://vimeo.com/album/4186555'
						],
						plugins: {
							'playlist': {}
						},
						width: width +'px',
						height: height +'px'
					});
				}, wait);

				serviceTimesView.render();
            },

			showMenu: function() {
				menuView.render();
			},
			
			defaultAction: function(actions){
				this.showMenu();
				secondaryView.render();
				serviceTimesView.render();
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