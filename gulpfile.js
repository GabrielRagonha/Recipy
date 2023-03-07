const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// Default compile
function defaultCompile() {
  return src('assets/default/style.scss')
  .pipe(
    sass({
      outputStyle: 'compressed',
    })
  )
  .on('error', sass.logError)
  .pipe(rename({ extname: '.min.css' }))
  .pipe(dest('assets/css'))
}

//Scss compile
function scssCompile() {
  return src('src/scss/pages/**/*.scss')
    .pipe(
      sass({
        outputStyle: 'compressed',
      })
    )
    .on('error', sass.logError)
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('assets/css'));
}

//Js compile
function jsCompile() {
  return src('src/scripts/**/*.js')
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('assets/js'));
}

//Watch
function watchCompilers() {
  watch('assets/default/style.scss', defaultCompile);
  watch('src/scss/**/*.scss', scssCompile);
  watch('src/scripts/**/*.js', jsCompile);
}

exports.default = series(
  defaultCompile,
  scssCompile,
  jsCompile,
  watchCompilers
);
