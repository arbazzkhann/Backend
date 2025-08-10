const express = require('express');
const homeRouter = express.Router();

homeRouter.get('/', (req, res, next) => {
    console.log(`Handling / for get, request method is ${req.method}`);
    res.render("home.ejs", {req});
});

module.exports = homeRouter;