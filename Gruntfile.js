module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({
		jst: {
			compile: {
				files: {
					"src/js/templates/html.jst.js": ["src/js/templates/*.html"]
				}
			}
		},
		jshint: {
			default: {
				src: [
					'Gruntfile.js',
					'src/js/*.js',
					'src/js/tools/*.js',
					'src/js/views/*.js'
				],
				options: {
					'-W107': true
				}
			}
		},
		requirejs: {
			compile: {
				options: {
					baseUrl: "src/js/",
					mainConfigFile: "src/js/bootstrap.js",
					name: "crc",
					include: ["bootstrap"],
					out: "httpdocs/js/crc.min.js"
				}
			}
		},
		concat: {
			build: {
				src: ['src/js/libs/require.js', 'httpdocs/js/crc.min.js'],
				dest: 'httpdocs/js/crc.min.js'
			}
		},
		cssmin: {
			compress: {
				files: {
					'httpdocs/css/styles.css': "src/css/*.css"
				}
			}
		},
		imagemin: {
			options: {
				optimizationLevel: 3
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'src/img/',
					src: ['*.png', '*.jpg'],
					dest: 'httpdocs/img/'
				}]
			}
		},
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: { 
					'httpdocs/index.html' : 'src/index.html'
				}
			}
		}
	});

	grunt.event.on('watch', function(action, filepath) {
		grunt.log.writeln(filepath + ' has ' + action);
	});

	grunt.loadNpmTasks('grunt-contrib-jst');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-concat');
	//grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-imagemin");
	grunt.loadNpmTasks("grunt-contrib-htmlmin");
	//grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.registerTask('default', ['jst', 'jshint', 'requirejs', 'cssmin', 'concat', 'htmlmin']);
};