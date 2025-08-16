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

const contactUsGET = (req, res, next) => {
    res.render('store/contact-us-get.ejs', {req, activePath: '/contact-us'});
}

const contactUsPOST = (req, res, next) => {
    console.log(req.body);
    console.log(`Handling contact-us on POST request, url: ${req.url} and method: ${req.method}`);
    res.render('store/contact-us-post.ejs', {req, activePath: '/contact-us'});
}

const houseDetails = (req, res, next) => {
    const houseId = req.params.houseId;

    Houses.findById(houseId, (house) => {
        if(!house) {
            res.redirect("/registered-houses");
        }
        else {
            console.log("House details found", house);
            res.render('store/house-details.ejs', {req, houseId, activePath: '/house-details'});
        }

    });
}


exports.homeGET = homeGET;
exports.registeredHouses = registeredHouses;
exports.BookingsGET = BookingsGET;
exports.FavouriteListGET = FavouriteListGET;
exports.contactUsGET = contactUsGET;
exports.contactUsPOST = contactUsPOST;
exports.houseDetails = houseDetails;