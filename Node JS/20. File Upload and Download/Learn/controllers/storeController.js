//local modules
const House = require('../models/house');
const User = require('../models/user');

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

exports.FavouriteListGET = async (req, res) => {
    const userId = req.session.user._id;
    const user = await User.findById(userId).populate('favourites');
    res.render("store/favourite-list.ejs", {
        favouriteHouses: user.favourites,
        req, 
        activePath: '/favourite-list',
        isLoggedIn: req.isLoggedIn,
        user: req.session.user
    });
}

exports.addToFavouritePOST = async (req, res, next) => {
    const houseId = req.body.houseId;
    const userId = req.session.user._id;
    const user = await User.findById(userId)

    if(!user.favourites.includes(houseId)) {
        user.favourites.push(houseId);
        await user.save();
    }

    console.log("House ID: ", houseId);

    res.redirect('/favourite-list')
}

exports.removeFromFavouritePOST = async (req, res, next) => {
    const houseId = req.body.houseId;
    const userId = req.session.user._id;

    const user = await User.findById(userId)
    if(user.favourites.includes(houseId)) {
        user.favourites = user.favourites.filter(fav => fav != houseId);
        await user.save();
        res.redirect('/favourite-list');
    }
};

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

