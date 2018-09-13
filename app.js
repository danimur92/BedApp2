var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var hbs = require('express-handlebars');
var expressValidator = require('express-validator');
var expressSession = require('express-session');

//local Imports
var mongoose = require('./server/db/mongoose');
var patient = require('./routes/patient.route');
var user = require('./routes/user.route');

var app = express();

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'patient', layoutsDir: __dirname + '/views/'}))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({secret: 'max', saveUninitialized: false, resave: false}));

app.use('/patient', patient);
app.use('/', user);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
var err = new Error('Not Found');
err.status = 404;
next(err);
});

let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
