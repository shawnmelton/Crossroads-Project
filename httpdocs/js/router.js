define([
	'jquery',
	'underscore',
	'backbone',
	'tools/contentLocator',
	'views/home',
	'views/learn',
	'views/connect',
	'views/find'
	], function($, _, Backbone, contentLocator, homeView, learnView, connectView, findView){
		var AppRouter = Backbone.Router.extend({
			routes: {
				// Define some URL routes
				'': 'showHome',
				'/': 'showHome',
				'learn': 'showLearn',
				'learn/': 'showLearn',
				'connect': 'showConnect',
				'connect/': 'showConnect',
				'find': 'showFind',
				'find/': 'showFind',
				
				// Default
				"*actions": 'defaultAction'
			},
			
			/**
			 * Forward down the page to the appropriate content.
			 */
			forwardContent: function() {
				contentLocator.moveByUrl();
			},
			
			showHome: function(){
				homeView.render();
			},
			
			showLearn: function() {
				learnView.render();
				this.forwardContent();
			},
			
			showConnect: function() {
				connectView.render();
				this.forwardContent();
			},
			
			showFind: function() {
				findView.render();
				this.forwardContent();
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