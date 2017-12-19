const express = require('express');
const app = express();
const debug = require('debug')
const PORT = process.env.PORT || 3000;

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('./webpack.config.js');
const compiler = webpack(config);

if (process.env.NODE_ENV === 'dev') {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));

}
app.use(express.static(`${__dirname}/dist`));
app.use(express.static(`${__dirname}/public`));

app.listen(PORT, ()=> {
  console.log(`server is listening to port: ${PORT}`);
});