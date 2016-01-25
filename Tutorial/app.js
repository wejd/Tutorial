var express = require('express');
var path = require('path');
var engine=require('ejs-locals');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var restfull = require('node-restful');
//var mongoose=restfull.mongoose;
var routes = require('./routes/index');
 var abouts = require('./routes/abouts');
var users = require('./routes/user');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs',engine);
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/abouts', abouts);
app.use('/users',users);

//restfukl api
//mongoose.connect('mongodb://localhost/restful');
//var productSchema=mongoose.Schema({
//  name :String,
 // sku : String,
//  price : Number



//});
//var products = restfull.model('products',productSchema);
//products.methods(['get','put','post','delete']);
//products.register(app,'/api/products');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
