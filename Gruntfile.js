module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        compress: {
            main: {
                options: {
                    archive: 'tinycms.zip',
                    pretty: true
                },
                expand: true,
                cwd: './',
                src: ['/**'],
                dest: './'
            }
        }
    });
    // Default task(s).
    grunt.registerTask('default', ['compress']);
};
