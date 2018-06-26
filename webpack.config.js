/**
 * @Webpack config
 */

'use strict';

const webpack = require('webpack');
const ChunkWebpackPlugin = webpack.optimize.CommonsChunkPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const NODE_ENV = 'development';

module.exports = {
    debug: true,
    devServer: {
        publicPath: '/',
        port: 3013,
        inline: true,
        progress: true,
        stats: 'errors-only',
        headers: { 'X-Webpack': 'yes' },
        historyApiFallback: true,
    },
    devtool: 'source-map',
    entry: {
        app: [ path.resolve(__dirname, 'src', 'bootstrap') ],
        vendor: [ path.resolve(__dirname, 'src', 'vendor') ]
    },
    module: {
        loaders: [
            { loader: 'raw', test: /\.(css|html)$/ },
            { loaders: [ 'raw-loader', 'sass-loader' ], test: /\.scss$/ },
            { exclude: /node_modules/, loader: 'ts', test: /\.ts$/ }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    plugins: [
        // new ChunkWebpackPlugin({
        //     filename: 'public/vendor.bundle.js',
        //     minChunks: Infinity,
        //     name: 'vendor'
        // }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
    ],
    resolve: {
        extensions: [ '', '.js', '.ts', 'css', 'scss' ]
    }
};  