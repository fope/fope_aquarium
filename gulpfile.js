const gulp = require('gulp');
const gutil = require('gulp-util')
const server = require('gulp-develop-server');
const sass = require('gulp-sass');
const webpack = require('webpack');

// -------------------
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig    = require('./webpack.config.js');


gulp.task('webpack-dev-server', function (c) {
    var myConfig = Object.create(webpackConfig);
    myConfig.devtool = 'eval';
    myConfig.debug = true;

    // Start a webpack-dev-server
    new WebpackDevServer(webpack(myConfig), {
        stats: {
            colors: true,
        }
    }).listen(myConfig.devServer.port, 'localhost', function (err) {
        if (err) {
            throw new gutil.PluginError('webpack-dev-server', err);
        }
        gutil.log('[webpack-dev-server]', 'http://localhost:3013');
    });
});

// The default task (called when you run `gulp` from cli)
gulp.task('webpack', ['webpack-dev-server']);

//-----------------------------
function log(error){
	console.log(error.message);
	this.end();
}
// ---- server API ------------------------------------
gulp.task('server:watch', function() {
	gulp.watch(['./backend/**'], server.restart);
});

gulp.task( 'server:start', function() {
	server.listen( { path: './backend/server.js' } );
});


// -----------------------------------------------------
// gulp.task('default', ['webpack', 'server:start', 'server:watch']);
gulp.task('default', ['server:start', 'server:watch']);