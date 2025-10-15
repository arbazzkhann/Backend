//local modules
const House = require('../models/house');

//addHousesGET middleware
exports.addHouseGET = (req, res, next) => {
    res.render("host/edit-house.ejs", {
        req, 
        activePath: '/add-house',
        editing: false,
        isLoggedIn: req.isLoggedIn,
        user: req.session.user
    });
}

//addHousePOST middleware
exports.addHousePOST = (req, res, next) => {
    //destructuting
    console.log("req body: ", req.body);
    const { houseName, housePrice, houseLocation, houseDescription } = req.body;
    console.log("house Details: ", houseName, housePrice, houseLocation, houseDescription);

    console.log("req.file: ", req.file);

    if(!req.file) {
        res.status(422).send("No image provided.");
    }

    const image = req.file.path;
   
    const house = new House({houseName, housePrice, houseLocation, image, houseDescription});
    house.save()
    .then(() => res.redirect('/host/registered-houses'))
    .catch(err =>  console.log("Error while adding: ", err))
}

//registered houses list
exports.hostRegisteredHouses = (req, res, next) => {
    House.find().then(registeredHouses => {
        res.render('host/host-registeredHouses.ejs', {
            registeredHouses, 
            req,
            activePath: '/host-registered-houses',
            isLoggedIn: req.isLoggedIn,
            user: req.session.user
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
            isLoggedIn: req.isLoggedIn,
            user: req.session.user
        });
    })
}

exports.editHousePOST = (req, res, next) => {
    const { houseId, houseName, housePrice, houseLocation, houseDescription } = req.body;

    console.log(req.body);

    House.findById(houseId).then(house => {
        house.houseName = houseName;
        house.housePrice = housePrice;
        house.houseLocation = houseLocation;
        house.houseDescription = houseDescription;

        if(req.file) {
            house.image = req.file.path;
        }
            
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