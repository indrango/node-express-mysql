var express = require('express');
var path = require('path');
var mysql = require('mysql');
var app = express();
var api = './app/config/config';

app.set('port', 3000);
app.set('views', path.join(__dirname, 'public/views/'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// route
require('./app/routes/routes')(app);

app.listen(app.get('port'));
console.log('node-express-mysql running at http://localhost:3000');;
