//external modules
const express = require('express');

//local modules
const { addHousePOST } = require('../controllers/houses');


//Router from express-module
const addHousePOSTRouter = express.Router();

//middleware router
addHousePOSTRouter.post('/add-house', addHousePOST);

exports.addHousePOSTRouter = addHousePOSTRouter;