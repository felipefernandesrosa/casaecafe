module.exports = function( grunt ) {
 
	grunt.initConfig({
	  
		jquery: {
			dist: {
				options: {
					prefix: "jquery-min-",
					minify: true
				},
				
				output: "assets/scripts/lib/jquery",
				
				versions: [ "2.0.0", "1.10.0", "1.9.0", "1.8.0" ]
			}
		},
	  
		uglify: {			
			options: {
				mangle : false
			},
			
			target: {
				files: {
					'assets/scripts/globalactions.js' : [ 'assets/dev/scripts/globalactions.js' ]
				}
			}
		},
		
		sass: {
			dist: {
				options : { style : 'compressed' },
				files : {
					'assets/stylesheet/globalstyles.css' : 'assets/dev/sass/globalstyles.scss'
				}
			},
			
		},
		
		watch : {
			dist : {
				files : [
					'assets/dev/scripts/**/*',
					'assets/dev/sass/**/*'
				],
				tasks : [ 'uglify', 'sass' ]
			}
		}
		
		
	});
	
	// Plugins
	grunt.loadNpmTasks('grunt-jquery-builder');
	grunt.loadNpmTasks('grunt-bootstrap');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	// Tasks
	grunt.registerTask('default', [ 'jquery' , 'uglify' ] );
	
	// Watch task
	grunt.registerTask('w', [ 'watch' ]);
	
};