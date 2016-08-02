var gulp = require('gulp'),
    gutil = require('gulp-util'),
    connect = require('gulp-connect'),
    path = require('path');
    

var htmlSources = ['', '/templates'],
    cssSources = ['css/'],
    jsSources = ['js/'],
    rootDir = [''];


gulp.task('js', function(){
    gulp.src(jsSources)
        .pipe(connect.reload())
        .on('error', gutil.log)
});

gulp.task('css', function(){
   gulp.src(cssSources)
    .pipe(connect.reload())
    .on('error', gutil.log) 
});

gulp.task('html', function(){
   gulp.src(htmlSources)
    .pipe(connect.reload())
    .on('error', gutil.log) 
});

gulp.task('watch', function(){
    gulp.watch(jsSources, ['js']);
    gulp.watch(cssSources, ['css']);
    gulp.watch(htmlSources, ['html']);
});

gulp.task('connect', function(){
    connect.server({
       root: rootDir,
       livereload: true 
    }); 
});

gulp.task('default', [
    'watch',
    'html',
    'js',
    'css',
    'connect'
]);