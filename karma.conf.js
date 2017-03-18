// This file used to test the app

var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  // mocha allow us to access to 'describe' and 'it' function
  // 'sourcemap': if there is error, there not using bundle.js file, but actual jsx file
  // 'reporters' showing which test passed, which test failes
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    // any file in 'app/tests' with any file name end wiht 'test.jsx'
    files: ['app/tests/**/*.test.jsx'],
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    // karma work closely with webpack
    webpack: webpackConfig,
    // We don't really care of webpackServer
    webpackServer: {
      noInfo: true
    }
  });
}
