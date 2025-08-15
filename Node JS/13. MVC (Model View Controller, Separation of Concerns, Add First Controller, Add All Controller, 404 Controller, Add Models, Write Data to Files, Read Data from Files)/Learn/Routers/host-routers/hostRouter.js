//external modules
const express = require('express')

//local modules
const { addHouseGET, addHousePOST, hostRegisteredHouses } = require('../../controllers/hostController');


//routers from express
const hostRouter = express.Router();


//middleware router add-house-GET
hostRouter.get('/add-house', addHouseGET);
//middleware router add-house-POST
hostRouter.post('/add-house', addHousePOST);

hostRouter.get('/host-registered-houses', hostRegisteredHouses);

//function export
module.exports = hostRouter