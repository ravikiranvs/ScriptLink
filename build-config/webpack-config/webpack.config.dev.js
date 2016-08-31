var path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');

var APP_DIR = path.resolve(__dirname, '../../src');

var CDN_DIR = path.resolve(__dirname, '../../dist/CDN/scripts');
var SP_DIR = path.resolve(__dirname, '../../dist/SP/scripts');

var baseConfig = {
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { test: /\.js?$/, include: APP_DIR, loader: 'babel' }
    ]
  }
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
  },
  plugins: [
    new LiveReloadPlugin({})
  ]
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