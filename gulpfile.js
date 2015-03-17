var gulp = require('gulp')
var gutil = require('gulp-util')
var refresh = require('gulp-livereload')
var spawn = require('child_process').spawn
var plumber = require('gulp-plumber')
var sourcemaps = require('gulp-sourcemaps')

var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var transform = require('vinyl-transform')

var watchify = require('watchify')
var browserify = require('browserify')

var node

var jsLocations =
      [ 'src/js/index.js'
      , 'src/js/**/*.js'
      ]
    var serverLocations = (
      [ './server.js'
      , 'app/**/*'
      , 'app/router/**/*'
      ]
    )

var bundler = watchify(browserify('./src/index.js', watchify.args));
// add any other browserify options or transforms here
bundler.transform('brfs');

gulp.task('js', bundle); // so you can run `gulp js` to build the file
bundler.on('update', bundle); // on any dep update, runs the bundler
bundler.on('log', gutil.log); // output build logs to terminal

function bundle() {
  return bundler.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('index.js'))
    // optional, remove if you dont want sourcemaps
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
      .pipe(sourcemaps.write('./')) // writes .map file
    //
    .pipe(gulp.dest('./public'));
}

gulp.task('server', function ()  {
  console.log('running server')
  if (node){
    node.kill()
    spawnNode()
    console.log('[server] Restarting the server...')
  }
  else {
    console.log('[server] Starting the server...')
    refresh.listen()
    spawnNode()
    node.on('close', function (code) {
      if (code === 8) console.log('Error detected, waiting for changes...')
    })
    process.on('exit', function () {
      node.kill()
      refresh.kill()
    })
  }
})


gulp.task('watch', function () {
  gulp.watch(jsLocations, ['js'])
})

gulp.task('default',
  [ 'watch'
  , 'js'
  , 'server'
  ]
)

function spawnNode () {
  node = spawn('node', ['index.js'], { stdio: 'inherit' })
}
