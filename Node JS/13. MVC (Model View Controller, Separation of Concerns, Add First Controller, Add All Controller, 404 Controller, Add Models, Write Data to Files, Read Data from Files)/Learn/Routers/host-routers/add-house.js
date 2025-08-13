//external modules
const express = require('express')

//local modules
const { addHouseGET } = require('../../controllers/houses');
const { addHousePOST } = require('../../controllers/houses');

//routers from express
const addHouseGETRouter = express.Router();
const addHousePOSTRouter = express.Router();

//middleware router add-house-GET
addHouseGETRouter.get('/add-house', addHouseGET);
//middleware router add-house-POST
addHousePOSTRouter.post('/add-house', addHousePOST);



//function export
exports.addHouseGETRouter = addHouseGETRouter;
exports.addHousePOSTRouter = addHousePOSTRouter;