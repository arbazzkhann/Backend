//external module
const express = require('express');

//router from express
const contactUsGetRouter = express.Router();

//contactUs-GET middleware function
const { contactUsGET } = require('../controllers/contact');

//contact-us-GET router
contactUsGetRouter.get('/contact-us', contactUsGET);

//exports
module.exports = contactUsGetRouter;