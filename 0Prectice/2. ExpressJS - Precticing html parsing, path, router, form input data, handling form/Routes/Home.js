const path = require('path');

const express = require('express');

const homeRouter = express.Router();

homeRouter.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/Home.html'));  
});

module.exports = homeRouter;