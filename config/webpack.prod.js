'use strict'

// Import base and mutate for specific production needs

const path = require('path')
const webpack = require('webpack')
const ROOT_PATH = path.resolve(__dirname + '/../')
const webpackConfig = require('./webpack.base.js')

const env = {
  NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production'),
}

delete webpackConfig.devtool
delete webpackConfig.devServer

webpackConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env': env,
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    beautify: false,
    mangle: {
      screw_ie8: true,
      keep_fnames: true,
    },
    compress: {
      screw_ie8: true,
    },
    comments: false,
  }),
  new webpack.optimize.AggressiveMergingPlugin()
)

module.exports = webpackConfig
