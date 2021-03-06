const webpack = require('webpack');
const Visualiser = require('webpack-visualizer-plugin')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
// const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin')

let webpackentry = {
  vue: 'vue',
  mapbox: 'mapbox-gl',
  bundle: `${__dirname}/src/index.js`
}

const outputDir = `${__dirname}/dist`;

const config = {
  entry: webpackentry,
  output: {
    path: outputDir,
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.js$/,   exclude: /node_modules/, loader: "babel-loader?presets[]=es2015"  },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader'
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    },
    extensions: ['*', '.js', '.json', '.vue']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['mapbox', 'vue', 'manifest']
    }),
    // new UglifyJSPlugin({
    //   exclude: ['manifest', 'mapbox']
    // }),
    // new Visualiser({
    //   filename: './stats.html'
    // }),
    // new ServiceWorkerWebpackPlugin({
    //   entry: `${__dirname}/src/service-worker.js`
    // })
  ]
}

module.exports = config;