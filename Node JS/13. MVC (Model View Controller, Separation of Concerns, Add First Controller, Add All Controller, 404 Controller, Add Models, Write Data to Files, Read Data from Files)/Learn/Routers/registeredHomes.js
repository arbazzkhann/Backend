//external modules
const express = require('express');

//router from express module
const registeredHomesRoute = express.Router();

//registeredHomes array
const { registeredHomes } = require('../controllers/homes');

registeredHomesRoute.get('/registered-homes', registeredHomes);

//exports
exports.registeredHomesRoute = registeredHomesRoute;