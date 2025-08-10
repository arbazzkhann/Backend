//external modules
const express = require('express')

//local modules
const { addHouseGET } = require('../controllers/houses');

//router from express
const addHouseGETRouter = express.Router();

//middleware router
addHouseGETRouter.get('/add-house', addHouseGET);

//function export
exports.addHouseGETRouter = addHouseGETRouter;
