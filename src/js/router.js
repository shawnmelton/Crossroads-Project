define(['jquery', 'underscore', 'backbone', 'tools/homeHoverContent', 'tools/contentLocator',
	'views/home', 'views/find', 'views/connectSecondary', 'views/learnSecondary'], 
	function($, _, Backbone, homeHoverContent, contentLocator, homeView, findView, connSecView, learnSecView){
		var AppRouter = Backbone.Router.extend({
			routes: {
				// Define some URL routes
				'': 'showHome',
				'/': 'showHome',
				'learn': 'showLearn',
				'learn/': 'showLearn',
				'learn/beliefs': 'showLearn',
				'learn/identity': 'showLearn',
				'learn/mission': 'showLearn',
				'learn/sermons': 'showLearn',
				'connect': 'showConnect',
				'connect/': 'showConnect',
				'connect/life-groups': 'showConnect',
				'connect/whats-going-on': 'showConnect',
				'connect/worship': 'showConnect',
				'find': 'showFind',
				'find/': 'showFind',
				'find/contact': 'showFind',
				'moms': 'showMoms',
				'moms/': 'showMoms',
				'easter': 'showEaster',
				'easter/': 'showEaster',
				'daddy-daughter-dance': 'showDance',
				'daddy-daughter-dance/': 'showDance',
				'i-am-crossroads': 'showIAm',
				'i-am-crossroads/': 'showIAm',
				'3dm-conference': 'show3dmConference',
				'3dm-conference/': 'show3dmConference',
				'military-wives': 'showMilitaryWives',
				'military-wives/': 'showMilitaryWives',
				
				// Default
				"*actions": 'defaultAction'
			},
			
			showHome: function(){
				homeView.render();

				if($(document).width() > 800 && !homeHoverContent.areHandlersSet()) {
					homeHoverContent.setHandlers();
				}
			},

			show3dmConference: function() {
				learnSecView.render('threeDMConf');
			},

			showDance: function() {
				connSecView.render('daddydance');
			},

			showIAm: function() {
				learnSecView.render('iAmCRC');
			},

			/*showIAmCRCVideo: function() {
				var width = Math.floor($(window).width() * 0.88),
					height = Math.floor((width * 9) / 16);

				if(width > 1000) {
					width = 1000;
					height = 562;
				} 

				$('#iamcrc').append('<video width="'+ width +'" height="'+ height +'" controls="controls"><source src="/video/i-am-crossroads.mp4" type="video/mp4"></video>');
			},*/
			
			showLearn: function() {
				learnSecView.render('learn');
				contentLocator.moveByUrl();
			},
			
			showConnect: function() {
				connSecView.render('connect');
				contentLocator.moveByUrl();
			},

			showEaster: function() {
				connSecView.render('easter');
			},
			
			showFind: function() {
				findView.render();
				contentLocator.moveByUrl();
			},

			showMoms: function() {
				connSecView.render('moms');
			},

			showMilitaryWives: function() {
				connSecView.render('militaryWives');
			},

			show404: function() {
				learnSecView.render('404');
			},
			
			defaultAction: function(actions){
				this.show404();
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