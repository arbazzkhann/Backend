//external modules
const express = require('express')

//local modules
const { addHomesGET } = require('../controllers/homes');

//router from express
const addHomesGETRouter = express.Router();

//middleware
addHomesGETRouter.get('/add-homes', addHomesGET);

//function export
module.exports = addHomesGETRouter;



