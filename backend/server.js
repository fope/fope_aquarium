var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');
var session = require('express-session');
// var mongoose = require('./mongodb/index');
// var sessionMongoDb = require('connect-mongo')(session);
var config = require('./configs/index');
var log = require('./logger/log')(module);
var router = require('./routes/index');

var app = express();
app.set('port', process.env.port || 3003);
// app.set('view engine', 'jade');
// app.set('views', path.join(__dirname, 'views'));

//middleware
// app.use(express.static(path.join(__dirname, '../public')));
// app.use(favicon(path.join(__dirname, '../public/favicon.ico')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
// app.use(session({
//     secret: config.get('session:secret'),
//     key: config.get('session:key'),
//     cookie: config.get('session:cookie'),
//     resave: false,
//     saveUninitialized: true,
//     store: new sessionMongoDb({mongooseConnection: mongoose.connection})
//   }));

app.use(router);

app.listen(app.get('port'), function(){
    log.info('ready on port ' + app.get('port'));
});