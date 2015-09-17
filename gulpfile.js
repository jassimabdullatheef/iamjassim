var gulp = require('gulp'),
  webserver = require('gulp-webserver'),
  sourcemaps = require('gulp-sourcemaps'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  jshint = require('gulp-jshint');

gulp.task('webserver', function() {
  gulp.src('build/app')
    .pipe(webserver({
      livereload: true,
      // directoryListing: true,
      open: true
    }));
});


// Script
gulp.task('script', function(){
    gulp.src('dev/scripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./build/app/scripts'));
});



// sass
gulp.task('sass', function () {
  gulp.src('dev/sass/**/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/app/asset/styles'))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('build/app/asset/styles'));
});



gulp.task('watch', function () {
  gulp.watch('dev/sass/**/*.sass', ['sass']);
});

gulp.task('default', ['webserver','sass', 'script', 'watch']);
