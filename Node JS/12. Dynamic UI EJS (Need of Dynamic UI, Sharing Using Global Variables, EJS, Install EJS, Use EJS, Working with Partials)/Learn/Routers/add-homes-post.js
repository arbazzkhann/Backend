const express = require('express');
const path = require('path');

const addHomesPOSTRouter = express.Router();

const registerdHouses = [];

addHomesPOSTRouter.post('/add-homes', (req, res, next) => {
    registerdHouses.push({houseName: req.body.houseName, houseState: req.body.houseState});
    res.sendFile(path.join(__dirname, "../views/add-homes-post.html"));
});

exports.addHomesPOSTRouter = addHomesPOSTRouter;
exports.registerdHouses = registerdHouses;