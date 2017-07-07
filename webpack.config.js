const webpack = require('webpack');

let webpackentry = {
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
    extensions: ['*', '.js', '.vue', 'json']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['manifest']
    })
  ]
}

module.exports = config;