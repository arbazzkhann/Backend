//core modules
const path = require('path');

//external modules
const express = require('express');

//local modules
const contactUsGetRouter = require('./Routers/contact-us-get');
const contactUsPostRouter = require('./Routers/contact-us-post');
const homeRouter = require('./Routers/home.js');
const addHomesGETRouter = require('./Routers/add-homes-get.js');
const { addHomesPOSTRouter } = require('./Routers/add-homes-post.js');
const { registeredHomesRoute } = require('./Routers/registeredHomes.js');

//import absolutePath
const abosolutePath = require('./utils/pathUtils.js');

//express app
const app = express();

//view engine
app.set('view engine', 'ejs');

app.use(express.static(abosolutePath));
app.use(express.urlencoded());

// handlig '/' on get
app.use(homeRouter);

// handling '/contact-us' on GET
app.use(contactUsGetRouter);

// handling '/contact-us' on POST
app.use(contactUsPostRouter);

// handling '/add-homes' on GET
app.use(addHomesGETRouter);

// handling '/add-homes' on POST
app.use(addHomesPOSTRouter);

// handling '/registered-homes' on POST
app.use(registeredHomesRoute);

//404 status
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(abosolutePath, './views/404.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`);
});