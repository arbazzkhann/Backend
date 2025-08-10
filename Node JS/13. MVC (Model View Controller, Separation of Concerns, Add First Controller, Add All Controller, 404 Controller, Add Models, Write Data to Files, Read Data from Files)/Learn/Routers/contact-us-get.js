const express = require('express');
const contactUsGetRouter = express.Router();

const { contactUsGET } = require('../controllers/contact');

contactUsGetRouter.get('/contact-us', contactUsGET);

module.exports = contactUsGetRouter;