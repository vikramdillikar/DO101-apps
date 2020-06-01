var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello Mars!\n');
});

app.get('/venus', function (req, res) {
  res.send('Hello Venus!\n');
});

app.get('/earth', function (req, res) {
  res.send('Hello Earth!\n');
});

app.get('/jupiter', function (req, res) {
  res.send('Hello Jupiter!\n');
});

app.get('/saturn', function (req, res) {
  res.send('Hello Saturn!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

