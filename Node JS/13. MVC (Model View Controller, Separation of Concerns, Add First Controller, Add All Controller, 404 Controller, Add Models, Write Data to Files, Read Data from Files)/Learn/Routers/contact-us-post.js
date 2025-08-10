//external modules
const express = require('express');

//router form express
const contactUsPostRouter = express.Router();

//contact-us-POST middleware function
const { contactUsPOST } = require('../controllers/contact')

//contact-us-post router
contactUsPostRouter.post('/contact-us', contactUsPOST);

//exports
module.exports = contactUsPostRouter;