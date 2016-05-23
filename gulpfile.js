var gulp = require('gulp'),
    connect = require('gulp-connect'),
    bower = require('gulp-bower');

gulp.task('bower', function() {
    return bower();
});

gulp.task('webserver', function() {
    connect.server({
        root: 'app'
    });
});

gulp.task('default', ['bower', 'webserver']);
