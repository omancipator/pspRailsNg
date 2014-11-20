var gulp =          require('gulp');
var bower =         require('gulp-bower');
var concat =        require('gulp-concat');
var jasmine =       require('gulp-jasmine');
var sass =          require('gulp-ruby-sass');
var plumber =       require('gulp-plumber');
var templateCache = require('gulp-angular-templatecache');


// bower
gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('vendor/assets/bower_components'))
});


// concat
gulp.task('concat', function() {
  return gulp.src([
    'vendor/assets/bower_components/angular/angular.js',
    'vendor/assets/bower_components/angular-route/angular-route.js',
    'app/assets/javascripts/pspApp.module.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/dist/js'));
});

//gulp.task('alert', function(){
//  return gulp.src([
//    'bower_components/foundation/js/foundation/foundation.alert.js',
//    'bower_components/angular-foundation/src/alert/alert.js',
//    'bower_components/angular-foundation/template/alert/alert.html'
//  ]).pipe(concat('foundation.alert.js'))
//});
gulp.task('template-cache', function () {
  gulp.src('templates/**/*.html')
    .pipe(templateCache())
    .pipe(gulp.dest('public/dist/templates'));
});



// jasmine
gulp.task('jasmine', function () {
  return gulp.src('spec/test.js')
    .pipe(jasmine());
});

// sass
gulp.task("sass", function(){
  return gulp.src([
    'bower_components/foundation/scss/foundation.scss',
    'app/assets/stylesheets/pspApp.scss'
  ])
    .pipe(sass())
    .on('error', function (err) { console.log(err.message); })
    .pipe(gulp.dest('public/dist/css'));
});
