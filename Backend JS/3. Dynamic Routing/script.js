//Dynamic routing:
//1. to make any route dynamic you can use ':' at the place where you want to make it dynamic
//2. for accessing dynamic route variable you can use 'request.params'

const express = require('express');
const app = express();

app.use(function(request, response, next) {
    console.log("Hello i am from 'use'.");
    next();
});

app.get('/', function(request, response) {
    response.send('Hello i am from "get".');
});

app.get('/user', function(request, response) {
    response.send(`Hello i am user route`);
});


//Dynamic Routing
app.get('/user/:username', function(request, response) {
    response.send(`Hello i am '${request.params.username}' userpage`);
})

app.listen(3000);