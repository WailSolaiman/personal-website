var gulp = require('gulp');

gulp.task('bower', function() {
    return gulp.src('./bower_components/**')
        .pipe(gulp.dest('./app/assets/vendor'));
});
