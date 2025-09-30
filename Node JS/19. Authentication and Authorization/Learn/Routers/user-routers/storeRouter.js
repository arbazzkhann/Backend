//External modules
const express = require('express');

//router from express
const storeRouter = express.Router();

//homeGET function
const { homeGET, BookingsGET, FavouriteListGET, registeredHouses, contactUsGET, contactUsPOST, houseDetails, addToFavouritePOST, removeFromFavouritePOST } = require('../../controllers/storeController');

//Store Routers
storeRouter.get('/', homeGET);
storeRouter.get('/bookings', BookingsGET);
storeRouter.get('/favourite-list', FavouriteListGET);
storeRouter.get('/registered-houses', registeredHouses);
storeRouter.get('/contact-us', contactUsGET);
storeRouter.post('/contact-us', contactUsPOST);

storeRouter.get("/house/:houseId", houseDetails);
storeRouter.post("/addfavourite", addToFavouritePOST);
storeRouter.post("/removefavourite", removeFromFavouritePOST);


//Exports
module.exports = storeRouter;