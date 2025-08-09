const addHomesGET = (req, res, next) => {
    res.render("add-homes-get.ejs", {req});
}

exports.addHomesGET = addHomesGET;


