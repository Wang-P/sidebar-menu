module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			main: {
				files: [
					{expand: true, flatten: true, src: ['node_modules/sass-rem/_rem.scss'], dest: 'scss/utils', filter: 'isFile'},
					{expand: true, flatten: true, src: ['node_modules/sass-mq/_mq.scss'], dest: 'scss/utils', filter: 'isFile'}
				]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-copy');
};
