const path = require('path');

const express = require('express');

const contactRouter = express.Router();

contactRouter.get('/contact', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/Contact.html')); 
});

module.exports = contactRouter;