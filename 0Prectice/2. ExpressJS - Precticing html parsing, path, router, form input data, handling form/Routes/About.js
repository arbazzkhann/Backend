const path = require('path');

const express = require('express');

const aboutRouter = express.Router();

aboutRouter.get('/about', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/About.html')); 
});

module.exports = aboutRouter;

