module.exports = function(grunt) {
	const sass = require('node-sass');
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		connect: {
			server: {
				options: {
          hostname: 'localhost',
          port: 3000,
          livereload: true
        }
			}
		},
		sass: {
			options: {
				implementation: sass,
				sourceMap: true
			},
			dist: {
				files: {                         
					'assets/css/main.css': 'assets/scss/main.scss',       
				}
			}
		},
		cssmin: {
		  options: {
		    mergeIntoShorthands: false,
		    roundingPrecision: -1
		  },
		  target: {
		    files: {
		      'assets/css/style.min.css': ['assets/css/main.css']
		    }
		  }
		},
		watch: {
			scripts: {
				files: ['*.html', 'assets/scss/**/*.scss'],
				tasks: ['sass'],
				options: {
					livereload: true
				},
			},
		},
	});
	
	grunt.registerTask('default', ['sass', 'cssmin', 'connect','watch']);
};