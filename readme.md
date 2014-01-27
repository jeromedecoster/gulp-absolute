# gulp-absolute

[Gulp](http://gulpjs.com) filter. Reduces a group of files to a single element according to its absolute path

## Install

Install with [npm](https://npmjs.org/package/gulp-absolute)

```
npm install --save-dev gulp-absolute
```

## Example

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
