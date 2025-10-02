const session = require('express-session');

//login controllers
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

//logout controller
exports.logoutPOST = (req, res, next) => {
    // res.clearCookie("isLoggedIn");  //clear cookie
    // res.cookie("isLoggedIn", false);   //setting isLoggedIn-cookie as false

    //it will destroy session form database
    req.session.destroy(() => {
        res.redirect('/login');
    })
    console.log("Now, you are logged out.");
}

//signup controllers
exports.getSignup = (req, res, next) => {
    res.render("auth/signup.ejs", {
        activePath: "/signup",
        isLoggedIn: false
    });
}
exports.signupPOST = (req, res, next) => {
    console.log("Signup success ", req.body);
    res.redirect('/login');
}