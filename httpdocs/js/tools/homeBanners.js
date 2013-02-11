define([
	"jquery",
	"underscore",
	"backbone"
	], function($, _, Backbone){
		var homeBanners = Backbone.Model.extend({
			defaults: {
				rotationIsSet: false
			},

			/**
			 * Make sure that we do not set the rotation twice.
			 * @return boolean
			 */
			isRotating: function() {
				return this.get("rotationIsSet");
			},

			/**
			 * Start the home page banner rotation.
			 */
			startRotation: function() {
				this.set({rotationIsSet: true});
			}
		});
		
		return new homeBanners;
	}
);