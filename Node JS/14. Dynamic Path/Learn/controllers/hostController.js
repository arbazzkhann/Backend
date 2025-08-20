//local modules
const Houses = require('../models/houses');

//addHousesGET middleware
const addHouseGET = (req, res, next) => {
    res.render("host/edit-house.ejs", {
        req, 
        activePath: '/add-house',
        editing: false
    });
}

//addHousePOST middleware
const addHousePOST = (req, res, next) => {
    //destructuting
    const { houseName, housePrice, houseState, housePhotoLink } = req.body;

    const house = new Houses(houseName, housePrice, houseState, housePhotoLink);
    house.save();
    res.redirect('/host-registered-houses');
}

const hostRegisteredHouses = (req, res, next) => {
    Houses.fetchAll(registeredHouses => {
        res.render('host/host-registeredHouses.ejs', {
            registeredHouses, 
            req,
            activePath: '/host-registered-houses'
        });
    });
}

const editHouseGET = (req, res, next) => {
    const houseId = req.params.houseId;
    const editing = req.query.edit === "true";

    Houses.findById(houseId, house => {
        if(!house) {
            console.log("Invalid house id");
            return res.redirect('/host-registered-houses')
        }
    
        res.render("host/edit-house.ejs", {
            req, 
            activePath: '/add-house',
            house,
            editing
        });
    })
}

const editHousePOST = (req, res, next) => {
    const { houseId, houseName, housePrice, houseState, housePhotoLink } = req.body;

    const house = new Houses(houseName, housePrice, houseState, housePhotoLink);
    house.save(houseId);

    res.redirect('/host-registered-houses');
}

exports.addHouseGET = addHouseGET;
exports.addHousePOST = addHousePOST;
exports.hostRegisteredHouses = hostRegisteredHouses;
exports.editHouseGET = editHouseGET;
exports.editHousePOST = editHousePOST;