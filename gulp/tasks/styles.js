var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var wait = require('gulp-wait');

gulp.task('styles', function() {
    gulp.src('./app/assets/styles/style.scss')
        .pipe(wait(500))
        .pipe(plumber())
        .pipe(autoprefixer({
            browsers: ['last 4 versions', 'ie 8', 'ie 9'],
            cascade: false
        }))
        .pipe(sass({
            includePaths: [require('node-normalize-scss').includePaths]
        }))   
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/temp/styles'));
});