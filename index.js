// const express = require('express');
import express from 'express';
const app = express();
const debug = require('debug')
const PORT = process.env.PORT || 3000;
// const mockAPI = process.env.API || 'http://localhost:8080';

// const request = require('request');

// app.post('/route', (req, res) => {
// });

app.use(express.static(`${__dirname}/dist`));
app.use(express.static(`${__dirname}/public`));

app.listen(PORT, ()=> {
  console.log(`server is listening to port: ${PORT}`);
});