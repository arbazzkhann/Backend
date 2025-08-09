//addHomesGET middleware
const addHomesGET = (req, res, next) => {
    res.render("add-homes-get.ejs", {req});
}

//registeredHouses Array
const registeredHouses = [];

//addHomesPOST middleware
const addHomesPOST = (req, res, next) => {
    registeredHouses.push({ 
        houseName: req.body.houseName, 
        houseState: req.body.houseState, 
        housePrice: req.body.housePrice, 
        housePhoto: req.body.housePhoto,
        housePhotoLink: req.body.housePhotoLink
    });
    res.render('add-homes-post.ejs', {req});
}

const registeredHomes = (req, res, next) => {
    res.render('registeredHomes', {registeredHouses: registeredHouses});
}


exports.addHomesGET = addHomesGET;
exports.addHomesPOST = addHomesPOST;
exports.registeredHomes = registeredHomes;

//export registeredHouses Array
exports.registeredHouses = registeredHouses;