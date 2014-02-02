define([
	'jquery',
	'underscore',
	'backbone',
	'tools/contentLocator',
	'tools/homeHoverContent',
	'views/home',
	'views/learn',
	'views/connect',
	'views/find',
	'views/404',
	'views/moms',
	'views/iAmCRC'
	], function($, _, Backbone, contentLocator, homeHoverContent, homeView, learnView, connectView, findView, 
		pageNotFoundView, momsView, iAmCRCView){
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
				'moms': 'showMoms',
				'moms/': 'showMoms',
				'i-am-crossroads': 'showIAm',
				'i-am-crossroads/': 'showIAm',
				
				// Default
				"*actions": 'defaultAction'
			},
			
			/**
			 * Forward down the page to the appropriate content.
			 */
			forwardContent: function() {
				$(document).ready(function() {
					contentLocator.moveByUrl();
				});
			},
			
			showHome: function(){
				homeView.render();

				if(!homeHoverContent.areHandlersSet()) {
					homeHoverContent.setHandlers();
				}
			},

			showIAm: function() {
				iAmCRCView.render();
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

			showMoms: function() {
				momsView.render();
			},

			show404: function() {
				pageNotFoundView.render();
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