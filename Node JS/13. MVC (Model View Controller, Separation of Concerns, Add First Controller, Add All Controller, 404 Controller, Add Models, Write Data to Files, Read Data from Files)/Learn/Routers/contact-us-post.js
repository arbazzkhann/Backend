const express = require('express');

const contactUsPostRouter = express.Router();

const { contactUsPOST } = require('../controllers/contact')

contactUsPostRouter.post('/contact-us', contactUsPOST);

module.exports = contactUsPostRouter;