//local modules
const House = require('../models/house');
const Favourite = require('../models/favourite');

//addHousesGET middleware
exports.addHouseGET = (req, res, next) => {
    res.render("host/edit-house.ejs", {
        req, 
        activePath: '/add-house',
        editing: false,
        isLoggedIn: req.isLoggedIn
    });
}

//addHousePOST middleware
exports.addHousePOST = (req, res, next) => {
    //destructuting
    const { houseName, housePrice, houseLocation, houseImageURL, houseDescription } = req.body;

    const house = new House({houseName, housePrice, houseLocation, houseImageURL, houseDescription});
    house.save()
    .then(() => res.redirect('/host/registered-houses'))
    .catch(err =>  console.log("Error while adding: ", err))
}

exports.hostRegisteredHouses = (req, res, next) => {
    House.find().then(registeredHouses => {
        res.render('host/host-registeredHouses.ejs', {
            registeredHouses, 
            req,
            activePath: '/host-registered-houses',
            isLoggedIn: req.isLoggedIn
        });
    });
}

exports.editHouseGET = (req, res, next) => {
    const houseId = req.params.houseId;
    const editing = req.query.edit === "true";

     House.findById(houseId).then(house => {
        if(!house) {
            console.log("Invalid house id");
            return res.redirect('/host-registered-houses');
        }
    
        res.render("host/edit-house.ejs", {
            req, 
            activePath: '/add-house',
            house,
            editing,
            isLoggedIn: req.isLoggedIn
        });
    })
}

exports.editHousePOST = (req, res, next) => {
    const { houseId, houseName, housePrice, houseLocation, houseImageURL, houseDescription } = req.body;
    console.log(req.body);

    House.findById(houseId).then(house => {
        house.houseName = houseName;
        house.housePrice = housePrice;
        house.houseLocation = houseLocation;
        house.houseImageURL = houseImageURL;
        house.houseDescription = houseDescription;

        house.save().then(result => {
            console.log("House updated: ", result);
        }).catch(err => {
            console.log("Error while updating house: ", err);
        })
        res.redirect("/host/registered-houses");
    }).catch(err => {
        console.log("House id not found: ", err);
    });
}

exports.deleteHousePOST = (req, res, next) => {
    const houseId = req.params.houseId;
    console.log("Came for delete by id!", houseId);

    //delete house by id
    House.findByIdAndDelete(houseId)
    .then()
    .catch(err => {
        console.log("Error while deleting: ", err);
    }) 

    //redirecting to host-registered-houses
    res.redirect('/host/registered-houses');
}   