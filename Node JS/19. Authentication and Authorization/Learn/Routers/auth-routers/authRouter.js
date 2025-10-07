//External modules
const express = require('express');

//router from express
const authRouter = express.Router();

const { getLogin, loginPOST, logoutPOST, getSignup, signupPOST } = require('../../controllers/authController');

//signin
authRouter.get('/login', getLogin);
authRouter.post("/login", loginPOST);

//logout
authRouter.post('/logout', logoutPOST);

//signup
authRouter.get('/signup', getSignup);
authRouter.post('/signup', signupPOST);

//Exports
module.exports = authRouter;