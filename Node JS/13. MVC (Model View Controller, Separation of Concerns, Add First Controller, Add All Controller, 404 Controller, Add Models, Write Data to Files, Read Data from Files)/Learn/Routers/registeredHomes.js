const express = require('express');
const path = require('path');
const { registeredHouses} = require('../controllers/Add-homes');

const registeredHomesRoute = express.Router();

registeredHomesRoute.get('/registered-homes', (req, res, next) => {
    res.render('registeredHomes', {registeredHouses: registeredHouses});
});

//export
exports.registeredHomesRoute = registeredHomesRoute;