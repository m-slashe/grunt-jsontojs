/*
 * grunt-myfirst
 * https://github.com/Muca/myfirstgrunt
 *
 * Copyright (c) 2017 Murilo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jsontojs: {
      main: {
        options: {
          variable: 'jsonConfigs'
        },
        files: {
          'config.js': ['package.json','bower.json']
        }
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'myfirst', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jsontojs']);

};
