const contactUsGET = (req, res, next) => {
    res.render('store/contact-us-get.ejs', {req, activePath: '/contact-us'});
}

const contactUsPOST = (req, res, next) => {
    console.log(req.body);
    console.log(`Handling contact-us on POST request, url: ${req.url} and method: ${req.method}`);
    res.render('store/contact-us-post.ejs', {req, activePath: '/contact-us'});
}

exports.contactUsGET = contactUsGET;
exports.contactUsPOST = contactUsPOST;