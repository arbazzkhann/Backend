//core modules
const path = require('path');

//external modules
const express = require('express');

const hostRouter = express.Router();


//form GET
hostRouter.get('/add-home', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../views/add-home-get.html"));
});

//form POST
hostRouter.post('/add-home', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../views/add-home-post.html"));
});

module.exports = hostRouter;