const express = require('express');
const app = express();
const debug = require('debug')
const PORT = process.env.PORT || 80;
// const mockAPI = process.env.API || 'http://localhost:8080';

// const request = require('request');

// app.post('/route', (req, res) => {
// });

// app.get('/route/:token', (req, res) => {
// });

app.use(express.static(`${__dirname}/public`));

app.listen(PORT, ()=> {
  debug(`server is listening to port: ${PORT}`);
});