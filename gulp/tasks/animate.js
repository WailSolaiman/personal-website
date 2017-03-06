var gulp = require('gulp');

gulp.task('animate', function() {
    return gulp.src('./node_modules/animate.css/animate.min.css')
        .pipe(gulp.dest('./app/assets/vendor/animate'));
});
