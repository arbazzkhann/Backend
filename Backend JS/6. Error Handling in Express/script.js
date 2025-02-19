const express = require('express');
const app = express();

app.use(function(request, response, next) {
    console.log("Hello i am from 'use'.");
    next();
});

app.use(express.static('./public'));

app.set('view engine', "ejs");

app.get("/", function(request, response) {
    response.render("index", {name: "Arbaz"});
});

app.listen(3000);