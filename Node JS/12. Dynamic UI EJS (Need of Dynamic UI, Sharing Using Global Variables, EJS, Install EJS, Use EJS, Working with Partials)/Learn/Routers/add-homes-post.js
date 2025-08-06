const express = require('express');
const path = require('path');

const addHomesPOSTRouter = express.Router();

addHomesPOSTRouter.post('/add-homes', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../views/add-homes-post.html"));
});

module.exports = addHomesPOSTRouter;