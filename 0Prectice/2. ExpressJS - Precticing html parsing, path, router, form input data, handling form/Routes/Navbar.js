const path = require('path');

const express = require('express');

const contactRouter = express.Router();

contactRouter.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/Navbar.html')); 
});

module.exports = contactRouter;