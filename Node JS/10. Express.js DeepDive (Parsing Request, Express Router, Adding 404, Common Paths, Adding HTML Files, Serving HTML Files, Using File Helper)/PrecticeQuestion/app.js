//core modules
const path = require('path');

//external modules
const express = require('express');

//local modules
const contactUsGetRouter = require('./Routers/contact-us-get');
const contactUsPostRouter = require('./Routers/contact-us-post');
const homeRouter = require('./Routers/home.js');

//express app
const app = express();

app.use(express.urlencoded());

// handlig '/' on get
app.use(homeRouter);

// handling '/contact-us' on GET
app.use(contactUsGetRouter);

// handling '/contact-us' on POST
app.use(contactUsPostRouter);

//404 status
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, './views/404.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`);
});