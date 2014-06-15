/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    sass: {
      dist: {
        files: [{
                  expand: true,
        cwd: 'assets/sass',
        src: ['*.scss'],
        dest: 'assets/styles',
        ext: '.css'
        }],
      },
    },

    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['lib/<%= pkg.name %>.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },

    gruntfile: {
        src: 'Gruntfile.js'
    },
    watch: {
      options: {
        livereload: true
      },

      sass: {
        files: 'assets/sass/*.scss',
        tasks: ['sass'],
      },

      livereload: {
        files: ['assets/scripts/**/*.js', 'assets/styles/*.css', 'assets/images/**/*.{jpg,gif,svg,jpeg,png}', '*.php', 'site/**/*.php'],
        options: {
          livereload: true
        }
      },
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['watch']);

  // Default task.
  //grunt.registerTask('default', ['qunit', 'concat', 'uglify']);
  grunt.registerTask('watchfile', ['watch']);

};
