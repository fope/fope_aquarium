/**
 * @Webpack production config
 */

'use strict';

return;

const webpack = require('webpack');
const ChunkWebpackPlugin = webpack.optimize.CommonsChunkPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const NODE_ENV = 'production';

module.exports = {
    debug: false,
    devtool: 'source-map',
    entry: {
        app: [ path.resolve(rootDir, 'src', 'bootstrap') ],
        vendor: [ path.resolve(rootDir, 'src', 'vendor') ]
    },
    module: {
        loaders: [
          { loader: 'raw', test: /\.(css|html)$/ },
          { loaders: [ 'raw-loader', 'sass-loader' ], test: /\.scss$/ },
          { exclude: /node_modules/, loader: 'ts', test: /\.ts$/ },
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(rootDir, 'public')
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          drop_console: true,
          unsafe: true
        }
      }),
    //   new ChunkWebpackPlugin({
    //       filename: 'public/vendor.bundle.js',
    //       minChunks: Infinity,
    //       name: 'vendor'
    //   }),
    //   new HtmlWebpackPlugin({
    //       filename: 'index.html',
    //       inject: 'body',
    //       template: path.resolve(rootDir, 'public', 'index.html')
    //   })
    ],
    resolve: {
        extensions: [ '', '.js', '.ts', 'css', 'scss' ]
    }
};  
