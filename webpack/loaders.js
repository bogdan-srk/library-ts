var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
  {test: /\.ts(x?)$/, loader: 'ts-loader'},
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader'
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css!resolve-url!sass?sourceMap')
  },
  {
    test: /\.html$/,
    exclude: /node_modules/,
    loader: 'raw'
  }
];