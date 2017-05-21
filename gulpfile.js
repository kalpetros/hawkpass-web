var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var minCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var pump = require('pump');

gulp.task('main', function() {
    gulp.src('assets/sass/main.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(rename({
	    suffix: '.min'
	}))
	.pipe(gulp.dest('assets/css/'));
});

gulp.task('minify-css', function() {
  return gulp.src('assets/css/*.css')
    .pipe(minCSS({compatibility: 'ie8'}))
	.pipe(gulp.dest('assets/css/'));
});

gulp.task('compress', function (cb) {
    pump([
	gulp.src('assets/js/src/*.js')
	    .pipe(rename({
		suffix: '.min'
	    })),
	uglify(),
	gulp.dest('assets/js/')
    ],cb);
});

gulp.task('default', function() {
    gulp.watch('assets/sass/*.scss', ['main']);
    gulp.watch('assets/js/src/*.js', ['compress']);
    gulp.watch('assets/css/*.css', ['minify-css']);
});
