//external modules
const express = require('express');

//routers from express
const contactUsGETRouter = express.Router();
const contactUsPOSTRouter = express.Router();

//middleware function
const { contactUsGET, contactUsPOST } = require('../../controllers/contact');

//contact-us-GET router
contactUsGETRouter.get('/contact-us', contactUsGET);
//contact-us-POST router
contactUsPOSTRouter.post('/contact-us', contactUsPOST);

//exports
exports.contactUsGETRouter = contactUsGETRouter;
exports.contactUsPOSTRouter = contactUsPOSTRouter;