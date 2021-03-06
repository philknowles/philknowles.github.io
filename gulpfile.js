var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var sass = require('gulp-sass');

//edit gulpfile.js and add in line 6: require('es6-promise').polyfill();
//install the missing dependency with: npm install es6-promise --save
var promise = require('es6-promise').polyfill();

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
    .pipe(sass({
        includePaths: sassPaths,
        outputStyle: 'compressed'
    })
        .on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});
