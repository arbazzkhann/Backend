const express = require('express');
const app = express();

app.get('/', function(request, response) {
    response.send('Hello world');
})

app.get('/contact', function(request, response) {
    response.send('Contact page.');
})


app.get('/about', function(request, response) {
    response.send('About page.');
})


app.listen(3000);