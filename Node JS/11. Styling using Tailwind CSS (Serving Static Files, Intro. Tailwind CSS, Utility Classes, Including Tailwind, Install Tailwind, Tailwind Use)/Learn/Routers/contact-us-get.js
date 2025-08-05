const express = require('express');
const contactUsGetRouter = express.Router();

const path = require('path');

contactUsGetRouter.get('/contact-us', (req, res, next) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, '../views/contact-us-get.html'));
});

module.exports = contactUsGetRouter;