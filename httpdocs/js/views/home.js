define([
		"jquery",
		"underscore",
		"backbone",
		'text!templates/home.html'
	], function($, _, Backbone, homeHTML){
		var homeView = Backbone.View.extend({
			header: $("body > div"),
			render: function(){
				// Using Underscore we can compile our template with data
				var data = {};
				var html = _.template(homeHTML, data);
				//this.header.html(html);
			}
		});
		
		// Our module now returns an instantiated view
		// Sometimes you might return an un-instantiated view e.g. return projectListView
		return new homeView;
	}
);