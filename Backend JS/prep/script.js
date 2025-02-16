const express = require('express');
const app = express();

app.use(function(request, response, next) {
    console.log("Hello world from use.");
    next();
});

app.get('/', function(request, response) {
    response.send("Hello world from get.");
});

app.get('/contact', function(request, response) {
    response.send("Hello i am contact route.");
});

app.listen(3000);