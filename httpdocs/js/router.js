define([
		'jquery',
		'underscore',
		'backbone',
		'views/home',
		'views/learn',
		'views/connect',
		'views/find'
	], function($, _, Backbone, homeView, learnView, connectView, findView){
		var AppRouter = Backbone.Router.extend({
			routes: {
				// Define some URL routes
				'': 'showHome',
				'/': 'showHome',
				'learn': 'showLearn',
				'connect': 'showConnect',
				'find': 'showFind',
				
				// Default
				"*actions": 'defaultAction'
			},
			
			showHome: function(){
				homeView.render();
			},
			
			showLearn: function() {
				learnView.render();
			},
			
			showConnect: function() {
				connectView.render();
			},
			
			showFind: function() {
				findView.render();
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