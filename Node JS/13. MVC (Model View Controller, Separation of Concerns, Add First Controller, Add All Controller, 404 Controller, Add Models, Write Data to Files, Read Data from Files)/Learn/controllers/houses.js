//local modules
const Home = require('../models/home');

//addHousesGET middleware
const addHouseGET = (req, res, next) => {
    res.render("add-house-get.ejs", {req});
}

//addHousePOST middleware
const addHousePOST = (req, res, next) => {
    //destructuting
    const { houseName, housePrice, houseState, housePhotoLink } = req.body;

    const home = new Home(houseName, housePrice, houseState, housePhotoLink);
    home.save();
    res.render('add-house-post.ejs', {req});
}

const registeredHouses = (req, res, next) => {
    const registeredHousesArray = Home.fetchAll();
    res.render('registeredHouses', {registeredHousesArray: registeredHousesArray});
}


exports.addHouseGET = addHouseGET;
exports.addHousePOST = addHousePOST;
exports.registeredHouses = registeredHouses;