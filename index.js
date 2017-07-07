const express = require('express');
const app = express();
const debug = require('debug')
const PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/dist`));
app.use(express.static(`${__dirname}/public`));

app.listen(PORT, ()=> {
  debug(`server is listening to port: ${PORT}`);
});