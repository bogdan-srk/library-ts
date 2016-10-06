var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var path = require('path');
var loaders = require('./loaders');

module.exports = {
  entry: [
    path.resolve(__dirname, '../app/index.ts')
  ],
  output: {
    path: path.resolve(__dirname, "../dist"),
    //publicPath: '/assets/',
    filename: 'bundle.js',
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.ts', '.js', '.json']
  },
  resolveLoader: {
    modulesDirectories: ["node_modules"]
  },
  devtool: 'source-map',
  plugins: [
    //new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../app/index.html'),
      inject: 'body',
      hash: true
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 8080,
      server: {
        baseDir: path.resolve(__dirname, '../dist')
      },
      ui: false,
      online: false,
      notify: false
    })
  ],
  module:{
    loaders: loaders
  }
};
