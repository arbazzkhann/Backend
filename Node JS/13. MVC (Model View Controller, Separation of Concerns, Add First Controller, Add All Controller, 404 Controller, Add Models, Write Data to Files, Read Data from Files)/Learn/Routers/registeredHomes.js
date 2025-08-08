const express = require('express');
const path = require('path');
const { registerdHouses } = require('./add-homes-post');

const registeredHomesRoute = express.Router();

registeredHomesRoute.get('/registered-homes', (req, res, next) => {
    res.render('registeredHomes', {registerdHouses: registerdHouses});
});

//export
exports.registeredHomesRoute = registeredHomesRoute;