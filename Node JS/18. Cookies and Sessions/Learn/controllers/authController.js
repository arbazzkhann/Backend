const session = require('express-session');

//addHousesGET middleware
exports.getLogin = (req, res, next) => {
    res.render('auth/login.ejs', {
        activePath: "/login",
        isLoggedIn: false
    });
}

exports.getLoginPOST = (req, res, next) => {
    console.log(req.body);
    // res.cookie("isLoggedIn", "true");  //cookie
    req.session.isLoggedIn = true;  //session
    res.redirect('/');
}

exports.logoutPOST = (req, res, next) => {
    // res.clearCookie("isLoggedIn");  //clear cookie
    // res.cookie("isLoggedIn", false);   //setting isLoggedIn-cookie as false

    //it will destroy session form database
    req.session.destroy(() => {
        res.redirect('/login');
    })
    console.log("Now, you are logged out.");
}