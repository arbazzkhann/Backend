//External modules
const express = require('express');

//router from express
const storeRouter = express.Router();

//homeGET function
const { homeGET, BookingsGET} = require('../../controllers/storeController');

//homeGET Router
storeRouter.get('/', homeGET);
storeRouter.get('/bookings', BookingsGET);

//Exports
module.exports = storeRouter;