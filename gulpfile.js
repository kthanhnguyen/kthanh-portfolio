var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cache = require('gulp-cached')
var notify = require('gulp-notify')
var plumber = require('gulp-plumber')

//** Post CSS Modules **//
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
//** Browser-Sync **//
var browserSync = require('browser-sync').create();

var paths = {
  sass: {
    src: 'source/sass/**/*.scss',
    dest: 'product/css/'
  },
  scripts: {
    src: 'source/js/**/*.js',
    dest: 'product/js/'
  },
  html: {
    src: 'source/*.html',
    dest: 'product/'
  },
  images: {
    src: 'source/images/**/*',
    dest: 'product/images/'
  },
  fonts: {
    src: 'source/fonts/**/*',
    dest: 'product/fonts/'
  },
  css: {
    src: 'source/css/**/*',
    dest: 'product/css/'
  },
  data: {
    src: 'source/data/**/*.json',
    dest: 'product/data/'
  },
  maps: './maps'
}

//sass
function sassTask() {
  var processors = [
      mqpacker,
      autoprefixer({
        browsers: ['last 2 versions', 'ie >=10', 'edge >= 88',, 'Firefox >= 86', 'Chrome >= 89', 'Safari >= 10', 'Opera >= 62']
      })
    ]
    // start sass task
  return gulp.src(paths.sass.src)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(sourcemaps.init()) // init sourcemaps
    .pipe(sass.sync({ outputStyle: 'expanded' }).on('error', sass.logError)) // compile scss
    .pipe(postcss(processors)) // autoprefix and combine media queries
    .pipe(sourcemaps.write(paths.maps)) // write emaps relative to source dir
    .pipe(cache('cashe-sass'))
    .pipe(gulp.dest(paths.sass.dest)) // pipe to css folder
    .pipe(browserSync.reload({
      stream: true,
      once: true
    }))
}

//html
function htmlTask() {
  return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(cache('cashe-html'))
    .pipe(browserSync.reload({
      stream: true,
      once: true
    }))
}

//js
function jsTask() {
  return gulp.src(paths.scripts.src)
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(cache('cashe-js'))
    .pipe(browserSync.reload({
      stream: true,
      once: true
    }))
}

//copy
function imgTask() {
  gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest))
}

function fontsTask() {
  gulp.src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dest))
}

function cssTask() {
  gulp.src(paths.css.src)
    .pipe(gulp.dest(paths.css.dest))
}

function dataTask() {
  gulp.src(paths.data.src)
    .pipe(gulp.dest(paths.data.dest))
}

//server
function serverTask() {
  browserSync.init({
    server: {
      baseDir: './product',
      ext: 'html'
    }
  })
}
//watch
function watchTask() {
  gulp.watch(paths.sass.src, gulp.series(sassTask))
  gulp.watch(paths.html.src, gulp.series(htmlTask))
  gulp.watch(paths.scripts.src, gulp.series(jsTask))
  gulp.watch(paths.images.src, gulp.series(imgTask))
  gulp.watch(paths.fonts.src, gulp.series(fontsTask))
  gulp.watch(paths.css.src, gulp.series(cssTask))
  gulp.watch(paths.data.src, gulp.series(dataTask))
}


//default
exports.default = gulp.parallel(
  imgTask, fontsTask, cssTask, dataTask,
  sassTask,
  htmlTask,
  jsTask,
  serverTask, watchTask);