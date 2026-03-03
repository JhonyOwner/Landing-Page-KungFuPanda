const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');
const imageMin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass())  // Compila sem compressão
        .pipe(cleanCss())  // Minifica
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*', { encoding: false }) 
        .pipe(imageMin()) 
        .pipe(gulp.dest('./dist/images')); 
}

exports.default = gulp.parallel(styles, images);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}