const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const ROOT_PATH = path.resolve(__dirname + '/../')

const webpackConfig = {
  target: 'web',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.html'],
    modules: ['node_modules'],
  },
  module: {},
  plugins: [],
}

// ------------------------------------
// Entry Points
// ------------------------------------

webpackConfig.entry = [
  path.resolve(ROOT_PATH, 'src/app/app'),
]

// ------------------------------------
// Bundle Output
// ------------------------------------

webpackConfig.output = {
  path: path.resolve(ROOT_PATH, 'dist'),
  publicPath: '/',
  filename: './bundle.js',
}

// ------------------------------------
// Loaders
// ------------------------------------
webpackConfig.module.loaders = [
  { test: /\.(js|jsx)$/,
    exclude: [ /node_modules/, /^.*\.spec\.js/, './dist/', './test/'],
    loader: 'babel-loader',
    query: {
        presets: [
          'airbnb',
          'es2015',
          'stage-0',
        ],
        plugins: ['transform-class-properties'],
      },
  }, {
    test: /\.json$/,
    loader: 'json',
  }, {
    test: /\.css$/, loaders: ['style-loader', 'css-loader'],
  }, {
    test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'],
  },
  { test: /\.woff(\?.*)?$/,  loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
  { test: /\.woff2(\?.*)?$/, loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2' },
  { test: /\.otf(\?.*)?$/,   loader: 'file?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype' },
  { test: /\.ttf(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
  { test: /\.eot(\?.*)?$/,   loader: 'file?prefix=fonts/&name=[path][name].[ext]' },
  { test: /\.svg(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml' },
  { test: /\.(png|jpg)$/,    loader: 'url?limit=8192' },
]

// ------------------------------------
// Plugins
// ------------------------------------
webpackConfig.plugins = [
  new HtmlWebpackPlugin({
      template: path.resolve(ROOT_PATH, 'src/index.html'),
      inject: 'body',
    }),
]

module.exports = webpackConfig
