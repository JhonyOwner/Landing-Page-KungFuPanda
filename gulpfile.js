const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');

function styles() {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass())  // Compila sem compressão
        .pipe(cleanCss())  // Minifica
        .pipe(gulp.dest('./dist/css'));
}

exports.default = styles;