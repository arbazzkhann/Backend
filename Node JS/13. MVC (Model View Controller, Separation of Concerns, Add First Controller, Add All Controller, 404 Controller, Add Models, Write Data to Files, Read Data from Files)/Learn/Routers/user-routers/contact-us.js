//external modules
const express = require('express');

//routers from express
const contactUsRouter = express.Router();

//middleware function
const { contactUsGET, contactUsPOST } = require('../../controllers/contact');

//contact-us-GET router
contactUsRouter.get('/contact-us', contactUsGET);
//contact-us-POST router
contactUsRouter.post('/contact-us', contactUsPOST);

//exports
module.exports = contactUsRouter;