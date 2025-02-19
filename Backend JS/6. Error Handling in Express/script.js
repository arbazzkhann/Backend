/*
Video Link with Time Stamp: https://youtu.be/pKJ4GGyDgJo?t=4944

Error Link: https://expressjs.com/en/guide/error-handling.html#:~:text=function%20errorHandler%20(err%2C%20req%2C%20res%2C%20next)%20%7B%0A%20%20if%20(res.headersSent)%20%7B%0A%20%20%20%20return%20next(err)%0A%20%20%7D%0A%20%20res.status(500)%0A%20%20res.render(%27error%27%2C%20%7B%20error%3A%20err%20%7D)%0A%7D

    1. copy that (only for error example):

        function errorHandler (err, req, res, next) {
        if (res.headersSent) {
            return next(err)
        }
        res.status(500)
        res.render('error', { error: err })
}



*/

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

//error route
app.get("/error", function(request, response) {
    throw Error("Mujhe nhi pata.");
});

//error handler
app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err);
    }
    res.status(500);
    res.render('error', { error: err });
  });

app.listen(3000);