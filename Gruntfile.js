// Generated on 2014-11-03 using generator-angular 0.9.8
'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-contrib-compass');

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: 'osscla/public'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    project: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['<%= project.app %>/modules/**/*.js'],
        tasks: ['newer:jshint:all']
      },
      jsTest: {
        files: ['<%= project.app %>/modules/**/*.js'],
        tasks: ['test']
      },
      compass: {
        files: ['<%= project.app %>/{modules,styles}/**/*.{scss,sass}'],
        tasks: ['compass:app']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      }
    },

    browserify: {
      main: {
          src: '<%= project.app %>/modules/app.js',
          dest: '<%= project.app %>/bundle.js'
      }
    },

    compass: {
      options: {
        sassDir: '<%= project.app %>/styles',
        cssDir: '<%= project.app %>/styles',
        generatedImagesDir: '<%= project.app %>/images/generated',
        imagesDir: [
            '<%= project.app %>/images',
        ],
        javascriptsDir: '<%= project.app %>/scripts',
        fontsDir: '<%= project.app %>/styles/fonts',
        importPath: [
            'node_modules',
            '<%= project.app %>/modules'
        ],
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: true,
        assetCacheBuster: false,
        outputStyle: 'expanded',
        debugInfo: true
      },
      clean: {
        options: {
          debugInfo: false,
          clean: true
        }
      },
      app: {
        options: {
          outputStyle: 'expanded',
          debugInfo: true
        }
      },
      test: {
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= project.app %>/modules/**/*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/**/*.js']
      }
    },

    // Automatically inject app components
    injector: {
      options: {
        ignorePath: '<%= project.app %>',
        relative: false,
        addRootSlash: false,
        destFile:'<%= project.app %>/index.html'
      },
      styles: {
        src: [
            '<%= project.app %>/styles/**/*.css',
            'node_modules/angular/angular-csp.css',
            'node_modules/angular-xeditable/dist/css/xeditable.css',
            'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css',
            'node_modules/bootstrap/dist/css/bootstrap.css',
            'node_modules/ng-tags-input/build/ng-tags-input.css',
            'node_modules/ui-select/dist/select.css'
        ]
      }
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      },
      ci: {
        configFile: 'test/karma.conf.js',
        reporters: ['progress', 'junit'],
        singleRun: true
      }
    }
  });

  grunt.registerTask('test', [
    'newer:jshint:all',
    'karma:unit'
  ]);

  grunt.registerTask('testci', [
    'newer:jshint:all',
    'karma:ci'
  ]);

  grunt.registerTask('build', [
    'compass:clean',
    'compass:app',
    'browserify',
    'injector'
  ]);

  grunt.registerTask('dev', [
    'newer:jshint',
    'compass:app',
    'build'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test'
  ]);
};
