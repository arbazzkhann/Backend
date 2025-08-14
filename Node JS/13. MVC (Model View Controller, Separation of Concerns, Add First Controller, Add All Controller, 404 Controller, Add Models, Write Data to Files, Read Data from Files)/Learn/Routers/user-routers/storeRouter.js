//External modules
const express = require('express');

//router from express
const storeRouter = express.Router();

//homeGET function
const { homeGET, BookingsGET, FavouriteListGET } = require('../../controllers/storeController');

//homeGET Router
storeRouter.get('/', homeGET);
storeRouter.get('/bookings', BookingsGET);
storeRouter.get('/favourite-list', FavouriteListGET);

//Exports
module.exports = storeRouter;