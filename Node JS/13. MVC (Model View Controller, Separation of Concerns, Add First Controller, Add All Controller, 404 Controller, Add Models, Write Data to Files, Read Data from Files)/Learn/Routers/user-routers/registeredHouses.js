//external modules
const express = require('express');

//router from express module
const registeredHousesRoute = express.Router();

//registeredHouses array
const { registeredHouses } = require('../../controllers/storeController');


registeredHousesRoute.get('/registered-houses', registeredHouses);

//exports
module.exports = registeredHousesRoute;