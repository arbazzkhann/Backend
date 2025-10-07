//local modules
const Favourite = require('../models/favourite');
const House = require('../models/house');

exports.homeGET = (req, res, next) => {
    console.log("Session value: ", req.session.isLoggedIn);
    res.render("home.ejs", {
        req, 
        activePath: '/',
        isLoggedIn: req.isLoggedIn,
        user: req.session.user
    });
}

exports.registeredHouses = (req, res, next) => {
    House.find().then(registeredHouses => {
        console.log("registered Houses: ", registeredHouses);
        res.render('store/registeredHouses.ejs', {
            registeredHouses, 
            req, 
            activePath: '/registered-houses',
            isLoggedIn: req.isLoggedIn,
            user: req.session.user
        });
    })
    .catch(err => {
        console.log("error while db houses records: ", err);
    });
}

exports.BookingsGET = (req, res, next) => {
    res.render('store/bookings.ejs', {
        registeredHouses, 
        req, 
        activePath: '/bookings',
        isLoggedIn: req.isLoggedIn,
        user: req.session.user
    });
}

exports.FavouriteListGET = (req, res) => {
    Favourite.find().then(favourites => {
        favourites = favourites.map(fav => fav.houseId.toString());

        House.find().then(registeredHouses => {
            const favouriteHouses = registeredHouses.filter(house =>
                favourites.includes(String(house._id))
            );
            res.render("store/favourite-list.ejs", {
                favouriteHouses, 
                req, 
                activePath: '/favourite-list',
                isLoggedIn: req.isLoggedIn,
                user: req.session.user
            });
        });
    });
}

exports.contactUsGET = (req, res, next) => {
    res.render('store/contact-us-get.ejs', {
        req, 
        activePath: '/contact-us',
        isLoggedIn: req.isLoggedIn,
        user: req.session.user
    });
}

exports.contactUsPOST = (req, res, next) => {
    console.log(req.body);
    console.log(`Handling contact-us on POST request, url: ${req.url} and method: ${req.method}`);
    res.render('store/contact-us-post.ejs', {
        req, 
        activePath: '/contact-us',
        isLoggedIn: req.isLoggedIn,
        user: req.session.user
    });
}

exports.houseDetails = (req, res, next) => {
    const houseId = req.params.houseId;

    House.findById(houseId).then(house => {
        if(!house) {
            res.redirect("/registered-houses");
        }
        else {
            console.log("House details found", house);
            res.render('store/house-details.ejs', {
                req, 
                houseId, 
                activePath: '/house-details',
                house: house,
                isLoggedIn: req.isLoggedIn,
                user: req.session.user
            });
        }
    });
}

exports.addToFavouritePOST = (req, res, next) => {
    const houseId = req.body.houseId;
    console.log("House ID: ", houseId);

    Favourite.findOne({houseId}).then(fav => {
        if(fav) {
            console.log("Already marked as favourite");
        }
        else {
            fav = new Favourite({houseId});
            fav.save().then(result => {
                console.log("Added to favourite list: ", result);
            });
        }
        res.redirect('/favourite-list')
    }).catch(err => {
        console.log("Error while add to favourite: ", err);
    });
}

exports.removeFromFavouritePOST = (req, res, next) => {
    console.log("Came to remove from Favourite", req.body);
    const houseId = req.body.houseId;
    Favourite.findOneAndDelete(houseId)
    .then(result => {
        console.log("Removed from favourites: ", result);
    }).catch(err => {
        console.log("Error occur while add to removing from favourite", err);
    }).finally(() => {
        res.redirect('/favourite-list');
    })
};