//external modules
const express = require('express');

//local modules
const contactUsRouter = require('./Routers/user-routers/contact-us.js');
const storeRouter = require('./Routers/user-routers/storeRouter.js');

const addHouseRouter = require('./Routers/host-routers/add-house.js');
const registeredHousesRoute = require('./Routers/user-routers/registeredHouses.js');

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
app.use(storeRouter);

// handling '/contact-us' on GET
app.use(contactUsRouter);

// handling '/add-house'
app.use(addHouseRouter);

// handling '/registered-house'
app.use(registeredHousesRoute);

//404 status
app.use(pageNotFount);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`);
});