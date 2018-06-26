var express = require('express');
var apiRouter = require('./api/index');
var path = require('path');
var log = require('../logger/log')(module);

var router = express.Router();

router.use(function(req, res, next){
    next();
});

router.all('/api/*', function(req, res){
    log.info('request API ' + req.url);
    apiRouter(req, res);
});

router.all('*', function(req, res){
    log.info('request page - ' + req.url);
    res.json({status: 404, data: {}});
    // res.render('index');
});

module.exports = router;