const path = require('path')
const webpack = require('webpack')
const vueConfig = require('./vue-loader.config')
const autoprefixer = require('autoprefixer');
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  devtool: isProd
    ? false
    : '#cheap-module-source-map',
  entry: './www/src/main.js',
  output: {
    path: path.resolve(__dirname, './www/dist'),
    publicPath: isProd ? '/www/dist' : '/dist',
    filename: 'build.js'
  },
  resolve: {
    alias: {
      'public': path.resolve(__dirname, '../public'),
    },
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        use: /* isProd
          ? ExtractTextPlugin.extract({
              use: 'css-loader?minimize',
              fallback: 'vue-style-loader'
            })
          : */ ['vue-style-loader', 'css-loader']
      }
    ]
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? 'warning' : false
  },
  plugins: isProd
    ? [
        new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false }
        }),
        /* new ExtractTextPlugin({
          filename: 'common.[chunkhash].css'
        }), */
        /*new webpack.LoaderOptionsPlugin({
          minimize: true
        })*/
      ]
    : [
        new FriendlyErrorsPlugin()
      ]
}
