//external modules
const express = require('express');

//local modules
const contactUsGetRouter = require('./Routers/contact-us-get');
const contactUsPostRouter = require('./Routers/contact-us-post');
const homeRouter = require('./Routers/home.js');

const { addHouseGETRouter } = require('./Routers/add-house-get.js');
const { addHousePOSTRouter } = require('./Routers/add-house-post.js');
const { registeredHousesRoute } = require('./Routers/registeredHouses.js');

const { passwordRoute } = require('./Routers/passwordRoute.js');
const { passwordRoutePost } = require('./Routers/passwordRoutePost.js');

//import absolutePath
const abosolutePath = require('./utils/pathUtils.js');

//express app
const app = express();

//view engine
app.set('view engine', 'ejs');

app.use(express.static(abosolutePath));
app.use(express.urlencoded());

//universal middleware
app.use((req, res, next) => {
    console.log('url: ', req.url, "method: ", req.method);
    next();
});

// handlig '/' on get
app.use(homeRouter);

// handling '/contact-us' on GET
app.use(contactUsGetRouter);

// handling '/contact-us' on POST
app.use(contactUsPostRouter);






// handling '/add-house' on GET
app.use(addHouseGETRouter);

// handling '/add-house' on POST
app.use(addHousePOSTRouter);

// handling '/registered-house' on POST
app.use(registeredHousesRoute);








// handling '/password' on GET
app.use(passwordRoute);

// handling '/password' on POST
app.use(passwordRoutePost);

//404 status
app.use((req, res, next) => {
res.status(404).render('404.ejs', {req});
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`);
});