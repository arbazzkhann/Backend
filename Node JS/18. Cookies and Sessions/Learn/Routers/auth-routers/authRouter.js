//External modules
const express = require('express');

//router from express
const authRouter = express.Router();

const { getLogin, getLoginPOST, logoutPOST } = require('../../controllers/authController');

authRouter.get('/login', getLogin);

authRouter.post("/login", getLoginPOST);

authRouter.post('/logout', logoutPOST);


//Exports
module.exports = authRouter;