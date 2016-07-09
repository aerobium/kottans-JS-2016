"use strict";

var http = require('http');

class Myapp {


    constructor() {

        this.functions = [];
    }

    use() {
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] === 'function') this.functions.push(arguments[i]);
        }
    }

    start(port, host, callback) {

        host = host || 'localhost'; // - ??????
        port = port || 8080;

        http.createServer((req, res) => {

            for (var i = 0; i < this.functions.length; i++) this.functions[i](req, res);

        }).listen(port);

        if (typeof callback === "function") {
            callback();
        }
    }
}


module.exports = new Myapp();
