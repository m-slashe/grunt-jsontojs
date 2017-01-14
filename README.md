# grunt-myfirst

> The best Grunt plugin ever.

## Getting Started
This plugin requires Grunt `~0.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jsontojs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jsontojs');
```

## The "myfirst" task

### Overview
In your project's Gruntfile, add a section named `jsontojs` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  jsontojs: {
      options: {
        //Options
      },
      files: {
        //Dest and the src array files;
      }
    },
});
```

### Options

#### options.variable
Type: `String`
Default value: `'jsonConfigs'`

The name of the variable in the js file;

### Usage Examples

#### Default Options
In this example, the values of json.json go to config.js

```js
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
    }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
