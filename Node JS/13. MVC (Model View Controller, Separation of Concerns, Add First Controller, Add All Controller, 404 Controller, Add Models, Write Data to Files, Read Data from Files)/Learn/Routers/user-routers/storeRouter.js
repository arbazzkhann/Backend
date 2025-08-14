//External modules
const express = require('express');

//router from express
const storeRouter = express.Router();

//homeGET function
const { homeGET, BookingsGET, FavouriteListGET, index } = require('../../controllers/storeController');

//homeGET Router
storeRouter.get('/', homeGET);
storeRouter.get('/index', index);
storeRouter.get('/bookings', BookingsGET);
storeRouter.get('/favourite', FavouriteListGET);

//Exports
module.exports = storeRouter;