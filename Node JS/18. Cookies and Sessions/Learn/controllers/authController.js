//addHousesGET middleware
exports.getLogin = (req, res, next) => {
    res.render('auth/login.ejs', {
        activePath: "/login",
        isLoggedIn: false
    });
}

exports.getLoginPOST = (req, res, next) => {
    console.log(req.body);
    req.isLoggedIn = true;
    res.redirect('/');
}