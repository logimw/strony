'use strict';

var gulp = require('gulp'),
    prefixer = require('gulp-autoprefixer'),
    scss = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require('browser-sync').create(),
    cache = require('gulp-cache');

var path = {
    dist: {
        html: 'dist/',
        js: 'dist/scripts/',
        css: 'dist/css/',
        img: 'dist/img/',
        fonts: 'dist/fonts/',
        other: 'dist/'
    },
    source: {
        html: 'src/*.html',
        js: 'src/scripts/**/*.js',
        scss: 'src/scss/',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
        other: 'src/*.*'
    },
    watch: {
        html: 'src/*.html',
        js: 'src/scripts/**/*.js',
        scss: 'src/scss/**/*.*',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
        other: 'src/*.*'
    }
};

gulp.task('clearCache', function() {

    cache.clearAll();

});

gulp.task('js:build', function () {
    gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/bootstrap/dist/js/bootstrap.js',
        path.source.js
    ])
        // .pipe(uglify())
        .pipe(gulp.dest(path.dist.js))
        .pipe(browserSync.stream())
});

gulp.task('scss:build', function () {
    gulp.src(path.source.scss+'*.scss')
        .pipe(scss({
            includePaths: ['node_modules/bootstrap/scss/']
        }).on('error', scss.logError))
        .pipe(prefixer('last 2 versions'))
        .pipe(gulp.dest(path.dist.css))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(path.dist.css+'min/'))
    gulp.src(path.source.scss+'*.css')
        .pipe(gulp.dest(path.dist.css))
        .pipe(browserSync.stream())
});

gulp.task('image:build', function () {
    gulp.src(path.source.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.dist.img))
        // .pipe(browserSync.stream())
});

gulp.task('fonts:build', function() {
    gulp.src(path.source.fonts)
        .pipe(gulp.dest(path.dist.fonts))
        .pipe(browserSync.stream())
});

gulp.task('other:build', function() {
    gulp.src(path.source.other)
        .pipe(gulp.dest(path.dist.other))
        .pipe(browserSync.stream())
});

gulp.task('html:build', function() {
    gulp.src(path.source.html)
        .pipe(gulp.dest(path.dist.html))
        .pipe(browserSync.stream())
});



gulp.task('clean', function (cb) {
    rimraf('./dist', cb);
});

gulp.task('build', [
    'js:build',
    'scss:build',
    'fonts:build',
    'image:build',
    'html:build',
    'other:build'
]);

gulp.task('serve', [
    'js:build',
    'scss:build',
    'fonts:build',
    'image:build',
    'html:build',
    'other:build'
], function() {

    browserSync.init({
        server: {
            baseDir: "dist/"
        }
    });

    gulp.watch(path.watch.html,     ['html:build'])
    gulp.watch(path.watch.scss,     ['scss:build'])
    gulp.watch(path.watch.js,       ['js:build'])
    gulp.watch(path.watch.img,      ['image:build'])
    gulp.watch(path.watch.fonts,    ['fonts:build'])

});

gulp.task('default', ['serve']);
