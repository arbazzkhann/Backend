//local modules
const Houses = require('../models/houses');

//addHousesGET middleware
const addHouseGET = (req, res, next) => {
    res.render("host/edit-house.ejs", {req, activePath: '/add-house'});
}

//addHousePOST middleware
const addHousePOST = (req, res, next) => {
    //destructuting
    const { houseName, housePrice, houseState, housePhotoLink } = req.body;

    const house = new Houses(houseName, housePrice, houseState, housePhotoLink);
    house.save();
    res.render('host/add-house-post.ejs', {req, activePath: '/add-house'});
}

const hostRegisteredHouses = (req, res, next) => {
    Houses.fetchAll(registeredHouses => {
        res.render('host/host-registeredHouses.ejs', {registeredHouses, req, activePath: '/host-registered-houses'});
    });
}

const editHomeGET = (req, res, next) => {
    const houseId = req.params.houseId;
    const editing = req.query.edit;

    res.render("host/edit-house.ejs", {
        req, 
        activePath: '/add-house'
    });
}


exports.addHouseGET = addHouseGET;
exports.addHousePOST = addHousePOST;
exports.hostRegisteredHouses = hostRegisteredHouses;
exports.editHomeGET = editHomeGET;