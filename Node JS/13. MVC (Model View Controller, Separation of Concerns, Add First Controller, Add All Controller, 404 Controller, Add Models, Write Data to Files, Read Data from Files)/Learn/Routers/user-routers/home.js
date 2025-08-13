//External modules
const express = require('express');

//router from express
const homeRouter = express.Router();

//homeGET function
const { homeGET } = require('../../controllers/home')

//homeGET Router
homeRouter.get('/', homeGET);

//Exports
exports.homeRouter = homeRouter;