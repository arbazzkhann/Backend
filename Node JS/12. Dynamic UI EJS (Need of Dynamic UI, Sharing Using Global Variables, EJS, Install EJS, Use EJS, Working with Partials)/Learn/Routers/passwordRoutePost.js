const express = require('express');

const passwordRoutePost = express.Router();

passwordRoutePost.post('/password', (req, res, next) => {
    console.log("Name: ", req.body.passwordName, "password: ", req.body.password);
    res.render('password-post', {req});
});

exports.passwordRoutePost = passwordRoutePost;