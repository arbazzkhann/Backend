//external modules
const express = require('express')

//local modules
const { addHouseGET } = require('../../controllers/hostController');
const { addHousePOST } = require('../../controllers/hostController');


//routers from express
const addHouseRouter = express.Router();


//middleware router add-house-GET
addHouseRouter.get('/add-house', addHouseGET);
//middleware router add-house-POST
addHouseRouter.post('/add-house', addHousePOST);


//function export
module.exports = addHouseRouter