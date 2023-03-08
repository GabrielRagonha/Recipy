const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// Default scss compile
function defaultScssCompile() {
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

// Default js compile
function defaultJsCompile() {
  return src('script.js')
  .pipe(uglify())
  .pipe(rename({ extname: '.min.js' }))
  .pipe(dest('assets/js'))
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
  watch('assets/default/style.scss', defaultScssCompile);
  watch('src/scss/**/*.scss', scssCompile);
  watch('script.js', defaultJsCompile);
  watch('src/scripts/**/*.js', jsCompile);
}

exports.default = series(
  defaultScssCompile,
  scssCompile,
  defaultJsCompile,
  jsCompile,
  watchCompilers
);
