'use strict';
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var badges = require('./controllers/badges');

app.use(bodyParser.json());

app.post('/', badges.save, badges.send, function(req, res) {
  res.send('\ndone\n');
});

app.listen(8080);
