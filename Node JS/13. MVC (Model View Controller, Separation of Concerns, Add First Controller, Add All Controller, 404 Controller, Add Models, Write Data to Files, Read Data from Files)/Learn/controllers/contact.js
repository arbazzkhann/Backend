const contactUsGET = (req, res, next) => {
    res.render('contact-us-get.ejs', {req});
}

const contactUsPOST = (req, res, next) => {
    console.log(req.body);
    console.log(`Handling contact-us on POST request, url: ${req.url} and method: ${req.method}`);
    res.render('contact-us-post.ejs', {req});
}

exports.contactUsGET = contactUsGET;
exports.contactUsPOST = contactUsPOST;