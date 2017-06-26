var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var logonPatient = require('./routes/logonPatient');
var logonDoctor = require('./routes/logonDoctor');
var game1 = require('./routes/game1');
var game2 = require('./routes/game2');
var game3 = require('./routes/game3');
var game4 = require('./routes/game4');
var game5 = require('./routes/game5');
var game6 = require('./routes/game6');
var doctorLink = require('./routes/doctorLink');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/userss', users);
app.use('/logonPatient', logonPatient);
app.use('/logon Doctor', logonDoctor)
app.use('/game1', game1);
app.use('/game2', game2);
app.use('/game3', game3);
app.use('/game4', game4);
app.use('/game5', game5);
app.use('/game6', game6);
app.use('/doctorLink', doctorLink);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
