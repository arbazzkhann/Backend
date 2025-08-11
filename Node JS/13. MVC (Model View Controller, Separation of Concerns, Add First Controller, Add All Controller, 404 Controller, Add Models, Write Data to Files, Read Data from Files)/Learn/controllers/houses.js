//local modules
const Houses = require('../models/houses');

//addHousesGET middleware
const addHouseGET = (req, res, next) => {
    res.render("add-house-get.ejs", {req});
}

//addHousePOST middleware
const addHousePOST = (req, res, next) => {
    //destructuting
    const { houseName, housePrice, houseState, housePhotoLink } = req.body;

    const house = new Houses(houseName, housePrice, houseState, housePhotoLink);
    house.save();
    res.render('add-house-post.ejs', {req});
}

const registeredHouses = (req, res, next) => {
    const registeredHousesArray = Houses.fetchAll();
    res.render('registeredHouses', {registeredHousesArray: registeredHousesArray});
}


exports.addHouseGET = addHouseGET;
exports.addHousePOST = addHousePOST;
exports.registeredHouses = registeredHouses;