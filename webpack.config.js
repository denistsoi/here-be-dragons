const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');

let webpackentry = {
  'mapbox-gl': 'mapbox-gl',
  'react-dom': 'react-dom',
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
      { test: /\.html$/, loader: "html-loader" },
      { test: /\.scss$/,  
        exclude: /node_modules/, 
        use: [{ 
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      }
    ]
  },
  resolve: {
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['mapbox-gl', 'react-dom', 'manifest']
    }),
    new Visualizer()
  ]
}

module.exports = config;