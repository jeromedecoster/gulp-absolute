var gutil = require('gulp-util');
var map   = require('map-stream');

module.exports = function(path, reverse) {
  if (typeof path !== 'string' || !path.length) {
    var msg = "argument '" + gutil.colors.cyan('path') + "' is a required string";
    throw new gutil.PluginError('gulp-absolute', msg);
  }
  return map(function (file, cb) {
    var ok = (reverse === true)
        ? file.path != path
        : file.path == path;

    ok ? cb(null, file) : cb(null);
  });
}
