define([
		'jquery',
		'underscore',
		'backbone',
		'views/home',
		'views/learn'
	], function($, _, Backbone, homeView, learnView){
		var AppRouter = Backbone.Router.extend({
			routes: {
				// Define some URL routes
				'': 'showHome',
				'/': 'showHome',
				'learn': 'showLearn',
				
				// Default
				"*actions": 'defaultAction'
			},
			
			showHome: function(){
				homeView.render();
			},
			
			showLearn: function() {
				learnView.render();
			},
			
			defaultAction: function(actions){
				console.log('No route:', actions);
			}
		});
		
		var initialize = function(){
			var app_router = new AppRouter;
			Backbone.history.start({
				pushState: true
			});
		};
		
		return {
			initialize: initialize
		};
	}
);