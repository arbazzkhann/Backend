/*
Setting up static files:
    1. Create a folder called 'public'
    2. Create three folder inside it: "image, stylesheet, javascript"
    3. Configure the express static in "script.js" file
            => app.use(express.static('./public'));
            => this is will create public as static url
*/

const express = require('express');
const app = express();

app.use(function(request, response, next) {
    console.log("I am from 'use'.");
    next();
});

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get("/", function(request, response) {
    response.render("index");
});

app.listen(3000);
