module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		coffee : {
			options: {
				bare: true
			},
			scripts: {
				flatten: true,
				expand: true,
				cwd: '../js/coffee',
				src: ['*.coffee'],
				dest: '../js/dev',
				ext: '.js'
			}
		},
		sass: {
		    dist: {
	    	  options: {
    	        style: 'compressed',
    	        compass : true,
    	        trace : true
    	      },
		      files: [{
		        expand: true,
		        cwd: '../css/sass',
		        src: ['*.scss'],
		        dest: '../css/main',
		        ext: '.css'
		      }]
		    }
		 },
		watch : {
			scripts : {
				files : ['../js/coffee/*.coffee'],
				tasks : ['processJs']
			},
			css: {
			    files: '../css/sass/*.scss',
			    tasks: ['processCss']
			}
		},
		concat : {
			dist : {
				src : ['../js/dev/*.js'],
				dest : '../js/dist/index.js'
			}
		},
		uglify: {
			dist : {
				files : {
					'../js/dist/index.min.js' : ['../js/dist/index.js'],
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-newer');


	grunt.registerTask('processJs', ['newer:coffee','concat','uglify']);
	grunt.registerTask('processCss', ['sass']);
	grunt.registerTask('default', ['sass','coffee','concat','uglify','watch']);
}