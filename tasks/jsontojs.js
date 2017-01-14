/*
 * grunt-jsontojs
 * https://github.com/m-slashe/grunt-jsontojs
 *
 * Copyright (c) 2017 Murilo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  const jsonFormat = require('json-format');

  grunt.registerMultiTask('jsontojs', 'This plugin read the json that you need and create a js file to use with your aplication.', function() {

    var options = this.options({
      variable: 'jsonConfigs'
    });
    
    var finaljson = {};
    this.files.forEach(function(f) {

      f.src.filter(function(file){
        return grunt.file.exists(file);
      })
      .map(function(file){
        const fileName = file.substring(file.lastIndexOf('/') + 1 ,file.length);
        const objectName = fileName.split('.').slice(0,1);
        finaljson[objectName] = grunt.file.readJSON(file);
      });

      
      const fileContent = 'var ' + options.variable + ' = ' + jsonFormat(finaljson);

      grunt.file.write(f.dest, fileContent);

      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
