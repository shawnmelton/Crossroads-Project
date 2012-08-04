define([
		'jquery',
		'underscore',
		'backbone',
		'views/home'
	], function($, _, Backbone, homeView){
		var AppRouter = Backbone.Router.extend({
			routes: {
				// Define some URL routes
				'': 'showHome',
				'/': 'showHome',
				
				// Default
				"*actions": 'defaultAction'
			},
			
			showHome: function(){
				console.log(homeView);
				homeView.render();
			},
			
			defaultAction: function(actions){
				console.log('No route:', actions);
			}
		});
		
		var initialize = function(){
			var app_router = new AppRouter;
			Backbone.history.start();
		};
		
		return {
			initialize: initialize
		};
	}
);