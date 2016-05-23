var gulp = require('gulp'),
    connect = require('gulp-connect'),
    bower = require('gulp-bower');

gulp.task('bower', function() {
    return  bower({ directory: 'bower_components', cwd: 'app' })
});

gulp.task('webserver', function() {
    connect.server({
        root: 'app'
    });
});

gulp.task('default', ['bower', 'webserver']);
