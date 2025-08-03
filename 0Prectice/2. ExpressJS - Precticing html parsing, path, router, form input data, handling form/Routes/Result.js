const path = require('path');

const express = require('express');

const resultRoute = express.Router();

resultRoute.post('/result', (req, res, next) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Result</title>
        </head>
        <body>
            <h1>Hello, ${req.body.name}</h1>
            <h2>You are ${req.body.age} years old ${req.body.gender}, and you live in ${req.body.city}.</h2>
        </body>
        </html>
    `)
});

module.exports = resultRoute;