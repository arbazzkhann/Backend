//addHousesGET middleware
const addHouseGET = (req, res, next) => {
    res.render("add-house-get.ejs", {req});
}

//registeredHouses Array
const registeredHousesArray = [];

//addHousePOST middleware
const addHousePOST = (req, res, next) => {
    registeredHousesArray.push({ 
        houseName: req.body.houseName, 
        houseState: req.body.houseState, 
        housePrice: req.body.housePrice, 
        housePhoto: req.body.housePhoto,
        housePhotoLink: req.body.housePhotoLink
    });
    res.render('add-house-post.ejs', {req});
}

const registeredHouses = (req, res, next) => {
    res.render('registeredHouses', {registeredHousesArray: registeredHousesArray});
}


exports.addHouseGET = addHouseGET;
exports.addHousePOST = addHousePOST;
exports.registeredHouses = registeredHouses;

//export registeredHouses Array
exports.registeredHousesArray = registeredHousesArray;