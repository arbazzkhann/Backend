const express = require('express');

const passwordRoute = express.Router();

passwordRoute.get('/password', (req, res, next) => {
    res.render('password', {req});
});

exports.passwordRoute = passwordRoute;