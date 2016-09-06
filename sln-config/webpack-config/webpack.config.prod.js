var webpack = require('webpack');
var path = require('path');
var CompressionPlugin = require('compression-webpack-plugin');

var APP_DIR = path.resolve(__dirname, '../../src');

var CDN_DIR = path.resolve(__dirname, '../../dist/CDN/scripts');
var SP_DIR = path.resolve(__dirname, '../../dist/SP/scripts');

var baseConfig = {
  target: 'web',
  module: {
    loaders: [
      { test: /\.js?$/, include: APP_DIR, loader: 'babel' }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false },
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.html$|\.css$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
};

var cdnFiles = Object.assign({}, baseConfig, {
  entry: {
    'say-hello-loader': APP_DIR + '/user-custom-actions/say-hello/loader.js',
    'say-hello': APP_DIR + '/user-custom-actions/say-hello/say-hello.js'
  },
  output: {
    publicPath: '/',
    path: CDN_DIR,
    filename: '[name].bundle.js'
  }
});

var spFiles = Object.assign({}, baseConfig, {
  entry: {
    'say-hello-custom-action': APP_DIR + '/user-custom-actions/say-hello/custom-action.js'
  },
  output: {
    publicPath: '/',
    path: SP_DIR,
    filename: '[name].bundle.js'
  }
});

module.exports = [cdnFiles, spFiles];