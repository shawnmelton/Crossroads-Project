require.config({
	paths: {
		jquery: "libs/jquery",
		underscore: "libs/underscore",
		backbone: "libs/backbone"	
	},
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
	    }
	}
});

require(["crc"], function(crc){
  crc.initialize();
});