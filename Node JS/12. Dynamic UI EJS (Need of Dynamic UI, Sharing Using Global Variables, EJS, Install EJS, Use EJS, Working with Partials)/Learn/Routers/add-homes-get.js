const path = require('path');

const express = require('express')

const addHomesGETRouter = express.Router();

addHomesGETRouter.get('/add-homes', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../views/add-homes-get.html"));
});

module.exports = addHomesGETRouter;