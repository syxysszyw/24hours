'use strict';

var path = require('path');
var gulp = require('gulp');
var cssmin = require('gulp-minify-css');

// 重构 gulp 模块
var less = require('gulp-less');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var imagemin = require('gulp-plumber');
var gutil = require('gulp-util');

var paths = {};
paths.htmls = {
    cwd: '.',
    src: '*.html'
};

paths.watchless = {
    cwd: 'less',
    src: '**/*.less'
};
paths.less = {
    cwd: 'less',
    src: '*.less',
    dest: 'css'
};
paths.images = {
    cwd: 'images',
    src: '**/*.*',
    dest: 'images'
};

function lessProcess(postProcess){
    var gulpStream = gulp.src(paths.less.src, {cwd: paths.less.cwd})
    .pipe(less())
    .on('error', function(err) {
        gutil.log(gutil.colors.red('less'), err.toString());
        this.emit('end');
    })
    .pipe(autoprefixer());
    return postProcess(gulpStream)
    .pipe(gulp.dest(paths.less.dest));
}

gulp.task('connect', function(){
    connect.server();
})

// gulp.task('devless', function(){
//     gulp.src(paths.less.src, {cwd: paths.less.cwd})
//         .pipe(less())
//         .pipe(gulp.dest(paths.less.dest))
//         .pipe(livereload({start: true}));
// });
gulp.task('devless', function(){
    return lessProcess(function(gulpStream){
        return gulpStream;
    })
    .pipe(livereload({start: true}));
});

gulp.task('watch', ['connect', 'devless'], function(){
    livereload.listen();
    gulp.watch(paths.htmls.src, {cwd: paths.htmls.cwd});
    gulp.watch(paths.watchless.src, {cwd: paths.watchless.cwd}, ['devless']);
    gulp.watch(paths.images.src, {cwd: paths.watchless.cwd}, ['imagemin']);
})

gulp.task('imagemin', function(){
    gulp.src(paths.images.src, {cwd: paths.images.cwd})
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest));
})