const express = require('express');
const app = express();


//Middleware
//1. middleware is run before route which means middleware with the process before route done.
//2. after middleware route should be done.
//3. we can do multiple middleware in same code. 
app.use(function(request, response, next) {
    console.log("Hello console.");
    next();
});

app.use(function(request, response, next) {
    console.log("Hello console 2.");
})


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