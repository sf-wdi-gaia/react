var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
  browserify({
    entries: 'app/index.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify, {presets: ['es2015', 'react']})
  .bundle()
  .on('error', function(err){
    console.log(err.message);
  })
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], function () {
  console.log("watching for changes...");
  gulp.watch('app/**/*.jsx', ['build']);
});

gulp.task('default', ['watch']);
