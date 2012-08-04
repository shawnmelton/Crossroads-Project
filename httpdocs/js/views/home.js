define([
		"jquery",
		"underscore",
		"backbone",
		'text!views/home.html'
	], function($, _, Backbone, homeHTML){
		var homeView = Backbone.View.extend({
			header: $("header"),
			render: function(){
				console.log("Got here");
			
				// Using Underscore we can compile our template with data
				var data = {};
				var compiledTemplate = _.template(homeHTML, data);
				this.header.append(compiledTemplate);
			}
		});
		
		// Our module now returns an instantiated view
		// Sometimes you might return an un-instantiated view e.g. return projectListView
		return new homeView;
	}
);