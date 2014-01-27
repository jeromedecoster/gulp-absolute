# gulp-absolute

<a href="http://gulpjs.com" target="_blank">Gulp</a> filter. Reduces a group of files to a single element according to its absolute path

## Install

Install with <a href="https://npmjs.org/package/gulp-absolute" target="_blank">npm</a>

```
npm install --save-dev gulp-absolute
```

## Example

With a `watch` action, when you just saved a javascript file, `jshint` only this file, not all the package

```js
var absolute = require('gulp-absolute');
var jshint   = require('gulp-jshint');
var stylish  = require('jshint-stylish');

var jsfiles  = './src/js/**/*.js';

gulp.task('default', function() {
  gulp.watch(jsfiles, function(e) {
    gulp.src(jsfiles)
      .pipe(absolute(e.path))
      .pipe(jshint('.jshintrc'))
      .pipe(jshint.reporter(stylish))
  });
});
```

## Option

You can `reverse` the selection, include all files except the specified absolute path

```js
// ...
.pipe(absolute(e.path, true))
```
