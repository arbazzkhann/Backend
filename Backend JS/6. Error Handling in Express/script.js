/*
Video Link with Time Stamp: https://youtu.be/pKJ4GGyDgJo?t=4944

    1. copy that (only for error example):

        function errorHandler (err, req, res, next) {
        if (res.headersSent) {
            return next(err)
        }
        res.status(500)
        res.render('error', { error: err })

    2. 
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

app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  })

app.listen(3000);