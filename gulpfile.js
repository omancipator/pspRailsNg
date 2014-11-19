var gulp = require('gulp');
var bower = require('gulp-bower');
var concat = require('gulp-concat');


gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('vendor/assets/bower_components'))
});



gulp.task('concat-pspApp', function() {
  return gulp.src([
    'vendor/assets/bower_components/angular/angular.js',
    'vendor/assets/bower_components/angular-route/angular-route.js',
    'app/assets/javascripts/pspApp.module.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/dist'));
});


