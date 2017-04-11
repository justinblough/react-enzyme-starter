'use strict'

// Import base and mutate for specific dev needs

const path = require('path')
const webpack = require('webpack')
const ROOT_PATH = path.resolve(__dirname + '/../')
const webpackConfig = require('./webpack.base.js')

const env = {
  NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
}

webpackConfig.devtool = 'eval',

webpackConfig.devServer = {
  port: 7777,
  host: 'localhost',
  historyApiFallback: true,
  noInfo: false,
  stats: 'minimal',
  hot: true,
  inline: true,
}

webpackConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env': env,
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
)

module.exports = webpackConfig
