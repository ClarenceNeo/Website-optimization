var gulp = require('gulp')
var gutil = require('gulp-util')
var uglify = require('gulp-uglify')
var watchPath = require('gulp-watch-path')
var sourcemaps = require('gulp-sourcemaps')
var minifycss = require('gulp-minify-css')
var imagemin = require('gulp-imagemin')

var handleError = function (err) {
  var colors = gutil.colors;
  console.log('\n')
  gutil.log(colors.red('Error!'))
  gutil.log('fileName: ' + colors.red(err.fileName))
  gutil.log('lineNumber: ' + colors.red(err.lineNumber))
  gutil.log('message: ' + err.message)
  gutil.log('plugin: ' + colors.yellow(err.plugin))
}
var combiner = require('stream-combiner2')

gulp.task('watchjs', function () {
  gulp.watch('src/js/**/*.js', function (event) {
    var paths = watchPath(event, 'src/', 'dist/')

    gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath)
    gutil.log('Dist ' + paths.distPath)

    var combined = combiner.obj([
      gulp.src(paths.srcPath),
      sourcemaps.init(),
      uglify(),
      sourcemaps.write('./'),
      gulp.dest(paths.distDir)
    ])

    combined.on('error', handleError)
  })
})

gulp.task('uglifyjs', function () {
  var combined = combiner.obj([
    gulp.src('src/js/**/*.js'),
    sourcemaps.init(),
    uglify(),
    sourcemaps.write('./'),
    gulp.dest('dist/js/')
  ])
  combined.on('error', handleError)
})

gulp.task('watchcss', function() {
  gulp.watch('src/css/**/*.css', function (event) {
    var paths = watchPath(event, 'src/', 'dist/')

    gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath)
    gutil.log('Dist ' + paths.distPath)

    gulp.src(paths.srcPath)
      .pipe(sourcemaps.init())
      .pipe(minifycss())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(paths.distDir))
    })
})

gulp.task('minifycss', function () {
  gulp.src('src/css/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(minifycss())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/css/'))
})

gulp.task('watchimage', function () {
  gulp.watch('src/img/**/*', function (event) {
    var paths = watchPath(event, 'src/', 'dist/')

    gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath)
    gutil.log('Dist ' + paths.distPath)

    gulp.src(paths.srcPath)
      .pipe(imagemin({
        progressive: true
      }))
      .pipe(gulp.dest(paths.distDir))
    })
})

gulp.task('image', function () {
  gulp.src('src/img/**/*')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('dist/img'))
})
gulp.task('default', ['watchjs','watchcss'])
