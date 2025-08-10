//external modules
const express = require('express');

//router from express module
const registeredHousesRoute = express.Router();

//registeredHouses array
const { registeredHouses } = require('../controllers/houses');


registeredHousesRoute.get('/registered-houses', registeredHouses);

//exports
exports.registeredHousesRoute = registeredHousesRoute;