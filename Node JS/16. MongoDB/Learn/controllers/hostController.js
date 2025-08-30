//local modules
const House = require('../models/house');
const Favourite = require('../models/favourite');

//addHousesGET middleware
exports.addHouseGET = (req, res, next) => {
    res.render("host/edit-house.ejs", {
        req, 
        activePath: '/add-house',
        editing: false
    });
}

//addHousePOST middleware
exports.addHousePOST = (req, res, next) => {
    //destructuting
    const { houseName, housePrice, houseLocation, houseImageURL, houseDescription } = req.body;

    const house = new House(null, houseName, housePrice, houseLocation, houseImageURL, houseDescription);
    house.save()
    .then(() => res.redirect('/host-registered-houses'))
    .catch(err =>  console.log("Error while adding: ", err))
}

exports.hostRegisteredHouses = (req, res, next) => {
    House.fetchAll().then(registeredHouses => {
        res.render('host/host-registeredHouses.ejs', {
            registeredHouses, 
            req,
            activePath: '/host-registered-houses'
        });
    });
}

exports.editHouseGET = (req, res, next) => {
    const houseId = req.params.houseId;
    const editing = req.query.edit === "true";

     House.findById(houseId).then(([houses]) => {
        const house = houses[0];
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

exports.editHousePOST = (req, res, next) => {
    const { houseId, houseName, housePrice, houseLocation, houseImageURL, houseDescription } = req.body;
    console.log(req.body);

    const house = new House(
        houseId,
        houseName, 
        housePrice, 
        houseLocation, 
        houseImageURL, 
        houseDescription
    );

    house.save()
    .then(() => res.redirect('/host-registered-houses'))
    .catch(err => console.log("Error while saving: ", err)) 
}

exports.deleteHousePOST = (req, res, next) => {
    const houseId = req.params.houseId;
    console.log("Came for delete by id!", houseId);

    //delete house by id
    House.deleteById(houseId)
    .then()
    .catch(err => {
        console.log("Error while deleting: ", err);
    }) 

    //removing from favourites
    Favourite.removeFromFavourite(req.body.houseId, (err) => {
        if (err && err.startsWith("Error")) {
            console.log("Error occurred while removing from favourite:", err);
        } else {
            console.log(err); // "House removed from favourites." OR "This House is not in favourites."
        }
    });

    //redirecting to host-registered-houses
    res.redirect('/host-registered-houses');

}