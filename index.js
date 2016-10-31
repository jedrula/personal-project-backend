// https://www.npmjs.com/package/kraken-js
console.log('started');

const express = require('express');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/posts', (req, res) => {
  res.send('hello world');
});

// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 3000;

app.listen(port);
