var gulp = require('gulp');
var cp = require('child_process');

gulp.task('bundle', function () {
  cp.spawn('webpack', [], {stdio: 'inherit'});
});

