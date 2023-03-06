'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': newFunction() });
    res.end('Hello World\n');

    function newFunction() {
        return 'text/plain';
    }
}).listen(port);
