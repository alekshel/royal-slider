const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const clean = require('gulp-clean');
const concat = require('gulp-concat');

gulp.task('clean-css', function () {
    return gulp.src('dist/css/royal-slider.min.css', {read: false, allowEmpty: true})
        .pipe(clean());
});

gulp.task('minify-css', function () {
    return gulp.src(['assets/css/variables.css', 'assets/css/style.css'])
        .pipe(cleanCSS())
        .pipe(concat('royal-slider.min.css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('minify-js', function () {
    return gulp.src('assets/js/main.js')
        .pipe(uglify())
        .pipe(concat('royal-slider.min.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default', gulp.series('clean-css', gulp.parallel('minify-js', 'minify-css')));