//external modules
const express = require('express');

//local modules
const { addHomesPOST } = require('../controllers/homes');


//Router from express-module
const addHomesPOSTRouter = express.Router();

addHomesPOSTRouter.post('/add-homes', addHomesPOST);

exports.addHomesPOSTRouter = addHomesPOSTRouter;