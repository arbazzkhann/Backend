const express = require('express');

const addHomesPOSTRouter = express.Router();

const registerdHouses = [];

addHomesPOSTRouter.post('/add-homes', (req, res, next) => {
    registerdHouses.push({ 
        houseName: req.body.houseName, 
        houseState: req.body.houseState, 
        housePrice: req.body.housePrice, 
        housePhoto: req.body.housePhoto,
        housePhotoLink: req.body.housePhotoLink
    });
    res.render('add-homes-post.ejs', {req});
});

exports.addHomesPOSTRouter = addHomesPOSTRouter;
exports.registerdHouses = registerdHouses;