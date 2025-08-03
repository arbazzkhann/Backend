const express = require('express');

const contactUsPostRouter = express.Router();

contactUsPostRouter.post('/contact-us', (req, res, next) => {
    console.log(req.body);
    console.log(`Handling contact-us on POST request, url: ${req.url} and method: ${req.method}`);
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Your name is ${req.body.name} and you are logged in with ${req.body.email} email address.</h1>
        </body>
        </html>
    `) 
});

module.exports = contactUsPostRouter;