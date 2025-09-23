//addHousesGET middleware
exports.getLogin = (req, res, next) => {
    res.render('auth/login.ejs', {
        activePath: "/login",
    });
}

exports.getLoginPOST = (req, res, next) => {
    console.log("Login successfull");
    res.redirect('/');
}