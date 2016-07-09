"use strict";

var config = require('./config');

var myapp = require('./myapp.js');

var myLogger1 = function (req, res) {
    console.log('LOGGED 1');
};

var myLogger2 = function (req, res) {
    console.log('LOGGED 2');
    res.end('Hello World!!!');
};

myapp.use(myLogger1, myLogger2);

myapp.start(config.port, config.host, () => console.log("listening on " + config.port));
