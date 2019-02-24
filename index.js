"use strict";

const express = require('express');
const app = express();
const sass = require('node-sass-middleware');
const PORT = 8080;

app.set('view engine', 'ejs');

app.use(sass({
  src: __dirname,
  dest: __dirname + '/public',
  debug: true,
  outputStyle: 'expanded'
}));

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {console.log(`Running on PORT: ${PORT}`);} );