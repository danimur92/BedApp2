var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var hbs = require('express-handlebars');

//local Imports
var mongoose = require('./server/db/mongoose');
var patient = require('./routes/patient.route');
// var index = require('./routes/index.route');

var app = express();

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'patient', layoutsDir: __dirname + '/views/'}))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

console.log('1.inizializazione');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', patient);

let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
