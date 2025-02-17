const express = require('express');
const app = express();

app.use(function(request, response, next) {
    console.log("Hello world from use.");
    next();
});

app.get('/', function(request, response) {
    response.send("Hello world from get.");
});

app.get('/user', function(request, response) {
    response.send(`User route`);
});

app.get('/user/:username', function(request, response) {
    response.send(`Hello i am ${request.params.username}`);
});

app.listen(3000);