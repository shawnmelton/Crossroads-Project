define(['jquery', 'underscore', 'backbone', 'views/home', 'views/secondary', 'views/menu'], 
	function($, _, Backbone, homeView, secondaryView, menuView){
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
				document.getElementById('main-content').innerHTML = JST['src/js/templates/live.html']();

				var width = (window.innerWidth * 0.8),
					height = (width * 0.6),
					liveEl = document.getElementById('live');

				if (width > 1000) {
					width = 1000;
					height = 600;
				}

				liveEl.innerHTML = '<h2>Latest Sermon</h2><iframe src="//player.vimeo.com/hubnut/album/4186555?color=44bbff&amp;background=000000&amp;slideshow=0&amp;video_title=1&amp;video_byline=0" width="'+ width +'" height="'+ height +'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'+
				'<p>&nbsp;</p><p>To listen to our sermons through iTunes podcasts, <a href="https://itunes.apple.com/us/podcast/crossroads-church/id374524089?mt=2" target="_blank">click here</a>.</p>';
				
				if (width > 600) {
					$(liveEl).append('<p>&nbsp;</p><hr><h2>View Past Sermons</h2>'+
						'<iframe id="sermon-videos-iframe" src="http://crcnorfolk.sermon.tv/mc/" name="mc-micro" width="520" height="870" frameborder="0" scrolling="no" allowTransparency="true">'+
						'<a href="http://crcnorfolk.sermon.tv/" target="_blank" id="mobile-video">'+
						'<img src="/img/non-flash-sermon-video.png" alt="CrossRoads Sermon Video">'+
						'</a>'+
					'</iframe>');
				}
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