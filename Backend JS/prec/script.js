const express = require('express');
const app = express();

app.use(function(request, response, next) {
    console.log("I am from 'use'.");
    next();
});

app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('index', {name: "Farhan"});
});

app.get('/about', function(request, response) {
    response.render('about', {name: "Arbaz"});
});

app.listen(3000);