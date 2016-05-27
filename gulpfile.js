var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

gulp.task('less', function () {
    return gulp.src('./week01/lec2/less/**/*.less')
        .pipe(watch('./week01/lec2/less/**/*.less'))
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest('./week01/lec2/css'));
});




