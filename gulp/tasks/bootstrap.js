var gulp = require('gulp');

gulp.task('bootstrap', function() {
    return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest('./app/assets/vendor/bootstrap'));
});
