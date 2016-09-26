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
				src: ['httpdocs/js/require.min.js', 'httpdocs/js/crc.min.js'],
				dest: 'httpdocs/js/crc.min.js'
			}
		},
		uglify: {
			options: {
				report: 'min'
			},
			my_target: {
				files: {
					'httpdocs/js/require.min.js': ['src/js/libs/require.js']
				}
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
		},
		watch: {
			css: {
				files: ['src/css/layout.css', 'src/css/responsive.css'],
				tasks: ['cssmin'],
				options: {
					livereload: true
				}
			},
			scripts: {
				files: ['src/js/*.js', 'src/js/**/*.js'],
				tasks: ['jshint', 'requirejs'],
				options: {
					livereload: true
				}
			},
			images: {
				files: ['src/img/*.png', 'src/img/*.jpg'],
				tasks: ['imagemin'],
				options: {
					livereload: true
				}
			},
			html: {
				files: ['src/index.html'],
				tasks: ['htmlmin'],
				options: {
					livereload: true
				}
			},
			templates: {
				files: ['src/js/templates/*.html'],
				tasks: ['jst', 'requirejs'],
				options: {
					livereload: true
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
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-imagemin");
	grunt.loadNpmTasks("grunt-contrib-htmlmin");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.registerTask('default', ['jst', 'jshint', 'requirejs', 'uglify', 'cssmin', 'concat', 'htmlmin']);
};