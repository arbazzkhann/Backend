//External modules
const express = require('express');

//router from express
const authRouter = express.Router();

const { getLogin, getLoginPOST } = require('../../controllers/authController');

authRouter.get('/login', getLogin);

authRouter.post("/login", getLoginPOST);


//Exports
module.exports = authRouter;