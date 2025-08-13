//external modules
const express = require('express');

//local modules
const { contactUsGETRouter } = require('./Routers/user-routers/contact-us.js');
const { contactUsPOSTRouter } = require('./Routers/user-routers/contact-us.js');
const { homeRouter } = require('./Routers/user-routers/home.js');

const { addHouseGETRouter } = require('./Routers/host-routers/add-house.js');
const { addHousePOSTRouter } = require('./Routers/host-routers/add-house.js');
const { registeredHousesRoute } = require('./Routers/user-routers/registeredHouses.js');

//errors
const { pageNotFount } = require('./controllers/errors.js');

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
app.use(contactUsGETRouter);

// handling '/contact-us' on POST
app.use(contactUsPOSTRouter);

// handling '/add-house' on GET
app.use(addHouseGETRouter);

// handling '/add-house' on POST
app.use(addHousePOSTRouter);

// handling '/registered-house' on POST
app.use(registeredHousesRoute);

//404 status
app.use(pageNotFount);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`);
});