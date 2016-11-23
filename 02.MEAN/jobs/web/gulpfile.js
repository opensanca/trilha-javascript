'use strict'

const gulp = require('gulp')
const clean = require('gulp-clean')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const useref = require('gulp-useref')
const gulpif = require('gulp-if')
const htmlmin = require('gulp-htmlmin')
const runSequence = require('run-sequence')

gulp.task('clean', () => {
  return gulp.src('./dist')
        .pipe(clean())
})

gulp.task('html', () => {
  return gulp.src('./src/**/*.html')
        .pipe(useref())
        .pipe(gulpif('*.html', htmlmin({collapseWhitespace: true})))
        .pipe(gulpif('*.js', babel({ presets: ['es2015'] })))
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulp.dest('./dist'))
})

gulp.task('img', () => {
  return gulp.src('./src/img/**/*')
        .pipe(gulp.dest('./dist/img'))
})

gulp.task('default', () => {
  return runSequence('clean', ['html', 'img'])
})

gulp.task('watch', () => {
  return gulp.watch('./src/**/*', ['default'])
})
