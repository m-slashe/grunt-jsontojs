/*
 * grunt-myfirst
 * https://github.com/Muca/myfirstgrunt
 *
 * Copyright (c) 2017 Murilo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  const jsonFormat = require('json-format');

  grunt.registerMultiTask('jsontojs', 'Plugin para utilizar json como js', function() {

    var options = this.options({
      variable: 'jsonConfigs'
    });
    
    var finaljson = {};
    this.files.forEach(function(f) {

      f.src.filter(function(file){
        return grunt.file.exists(file);
      })
      .map(function(file){
        const objectName = file.split('.').slice(0,1);
        finaljson[objectName] = grunt.file.readJSON(file);
      });

      
      const fileContent = 'var ' + options.variable + ' = ' + jsonFormat(finaljson);

      grunt.file.write(f.dest, fileContent);

      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
