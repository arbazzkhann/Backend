//local modules
const Houses = require('../models/houses');

const homeGET = (req, res, next) => {
    console.log(`Handling / for get, request method is ${req.method}`);
    res.render("home.ejs", {req, activePath: '/'});
}

const registeredHouses = (req, res, next) => {
    Houses.fetchAll(registeredHouses => {
        res.render('store/registeredHouses.ejs', {registeredHouses, req, activePath: '/registered-houses'});
    });
}

const BookingsGET = (req, res, next) => {
    res.render('store/bookings.ejs', {registeredHouses, req, activePath: '/bookings'});
}

const FavouriteListGET = (req, res, next) => {
    Houses.fetchAll(registeredHouses => {
        res.render('store/favouriteListGET.ejs', {registeredHouses, req, activePath: '/favourite-list'});
    });
}


exports.homeGET = homeGET;
exports.registeredHouses = registeredHouses;
exports.BookingsGET = BookingsGET;
exports.FavouriteListGET = FavouriteListGET;