const pageNotFount = (req, res, next) => {
    res.status(404).render('404.ejs', {req, activePath: 404});
}


exports.pageNotFount = pageNotFount;