const express = require('express');

const contactUsPostRouter = express.Router();

contactUsPostRouter.post('/contact-us', (req, res, next) => {
    console.log(req.body);
    console.log(`Handling contact-us on POST request, url: ${req.url} and method: ${req.method}`);
    res.render('contact-us-post.ejs', {req});
});

module.exports = contactUsPostRouter;