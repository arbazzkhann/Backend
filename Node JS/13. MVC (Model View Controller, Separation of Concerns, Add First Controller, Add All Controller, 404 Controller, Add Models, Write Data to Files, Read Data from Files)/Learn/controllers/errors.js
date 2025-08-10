const pageNotFount = (req, res, next) => {
    res.status(404).render('404.ejs', {req});
}


exports.pageNotFount = pageNotFount;