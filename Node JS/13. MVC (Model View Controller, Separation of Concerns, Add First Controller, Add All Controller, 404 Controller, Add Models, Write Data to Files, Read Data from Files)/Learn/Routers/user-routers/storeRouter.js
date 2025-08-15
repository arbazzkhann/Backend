//External modules
const express = require('express');

//router from express
const storeRouter = express.Router();

//homeGET function
const { homeGET, BookingsGET, FavouriteListGET, registeredHouses } = require('../../controllers/storeController');

//homeGET Router
storeRouter.get('/', homeGET);
storeRouter.get('/bookings', BookingsGET);
storeRouter.get('/favourite-list', FavouriteListGET);
storeRouter.get('/registered-houses', registeredHouses);

//Exports
module.exports = storeRouter;