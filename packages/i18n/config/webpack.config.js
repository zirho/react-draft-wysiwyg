const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index',
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'i18n.js',
    // TODO: check if libraryTarget is needed for this lib
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
