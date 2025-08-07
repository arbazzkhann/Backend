const express = require('express');
const contactUsGetRouter = express.Router();

const path = require('path');

contactUsGetRouter.get('/contact-us', (req, res, next) => {
    console.log(__dirname);
    res.render('contact-us-get.ejs', {req});
});

module.exports = contactUsGetRouter;