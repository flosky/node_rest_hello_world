// require packages
var express = require('express');
var bodyParser = require('body-parser');
var winston = require('winston');

// require routes
var helloWorld = require('./routes/hello_world');

// set up logger
winston.add(winston.transports.File, {filename: 'express.log'});

// set up express app
var app = express();

// set up middle ware
app.use(bodyParser.json({limit: '5mb'}));

// config rest endpoints
app.get('/', helloWorld.get);

// set up error handling
app.use(function(err, req, res, next) {

    if (err) {
        winston.info('error: ' + err);
    }

});

module.exports = app;
