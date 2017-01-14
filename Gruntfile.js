/*
 * grunt-myfirst
 * https://github.com/Muca/myfirstgrunt
 *
 * Copyright (c) 2017 Murilo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    jsontojs: {
      main: {
        options: {
          variable: 'config'
        },
        files: {
          'tmp/config.js': ['test/fixtures/json.json']
        }
      }
    },
    clean: {
      tests: ['tmp']
    },
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  grunt.loadTasks('tasks');

  grunt.registerTask('test', ['clean', 'jsontojs', 'nodeunit']);

  grunt.registerTask('default', ['test']);

};
