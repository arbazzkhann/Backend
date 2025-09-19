//local modules
const Favourite = require('../models/favourite');
const House = require('../models/house');

exports.homeGET = (req, res, next) => {
    console.log(`Handling / for get, request method is ${req.method}`);
    res.render("home.ejs", {req, activePath: '/'});
}

exports.registeredHouses = (req, res, next) => {
    House.fetchAll().then(registeredHouses => {
        console.log(registeredHouses);
        res.render('store/registeredHouses.ejs', {
            registeredHouses, 
            req, 
            activePath: '/registered-houses'
        });
    })
    .catch(err => {
        console.log("error while db houses records: ", err);
    });
}

exports.BookingsGET = (req, res, next) => {
    res.render('store/bookings.ejs', {registeredHouses, req, activePath: '/bookings'});
}

exports.FavouriteListGET = (req, res) => {
    Favourite.getFavourites().then(favourites => {
        favourites = favourites.map(fav => fav.houseId);

        House.fetchAll().then(registeredHouses => {
            const favouriteHouses = registeredHouses.filter(house =>
                favourites.includes(String(house._id))
            );
            res.render("store/favourite-list.ejs", {favouriteHouses, req, activePath: '/favourite-list'});
        });
    });
}

exports.contactUsGET = (req, res, next) => {
    res.render('store/contact-us-get.ejs', {req, activePath: '/contact-us'});
}

exports.contactUsPOST = (req, res, next) => {
    console.log(req.body);
    console.log(`Handling contact-us on POST request, url: ${req.url} and method: ${req.method}`);
    res.render('store/contact-us-post.ejs', {req, activePath: '/contact-us'});
}

exports.houseDetails = (req, res, next) => {
    const houseId = req.params.houseId;

    House.findById(houseId).then(house => {
        if(!house) {
            res.redirect("/registered-houses");
        }
        else {
            console.log("House details found", house);
            res.render('store/house-details.ejs', {req, houseId, activePath: '/house-details', house: house});
        }
    });
}

exports.addToFavouritePOST = (req, res, next) => {
    const houseId = req.body.houseId;
    console.log("House ID: ", houseId);
    const fav = new Favourite(houseId);
    fav.save().then(result => {
        console.log(result);
    }).catch(err => {
        console.log("Error occur while add to favourite", err);
    }).finally(() => {
        res.redirect('/favourite-list');
    })
    console.log("Came to add to Favourite", req.body);
}

exports.removeFromFavouritePOST = (req, res, next) => {
    console.log("Came to remove from Favourite", req.body);
    Favourite.removeFromFavourite(req.body.houseId, (err) => {
        if (err && err.startsWith("Error")) {
            console.log("Error occurred while removing from favourite:", err);
        } else {
            console.log(err); // "House removed from favourites." OR "This House is not in favourites."
        }

        res.redirect("/favourite-list");
    });
};