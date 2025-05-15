const http = require('http');

const server = http.createServer(function(req, res) {
    res.end("Hello world from node-http");
});

server.listen('3000');