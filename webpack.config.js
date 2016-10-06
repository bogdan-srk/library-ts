var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './app/app.ts',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: 'assets',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  watch: true,
  devServer: {
    contentBase: './app'
  }
};
