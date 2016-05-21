var express = require('express');
var router = express.Router();
var api = require('../config/config');

module.exports = function(app) {
  app.get('/', [api.getAll]);
};
