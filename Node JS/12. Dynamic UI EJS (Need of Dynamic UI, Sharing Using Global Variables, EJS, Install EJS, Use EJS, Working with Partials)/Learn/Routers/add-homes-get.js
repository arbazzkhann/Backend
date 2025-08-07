const path = require('path');

const express = require('express')

const addHomesGETRouter = express.Router();

addHomesGETRouter.get('/add-homes', (req, res, next) => {
    res.render("add-homes-get.ejs", {req});
});

module.exports = addHomesGETRouter;