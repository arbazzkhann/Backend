//core modules
const path = require('path');

//external modules
const express = require('express');

//routes
const homeRouter = require('./Routes/Home')
const aboutRoute = require('./Routes/About')
const contactRoute = require('./Routes/Contact')
const resultRoute = require('./Routes/Result')


const app = express();

app.use(express.urlencoded({ extended: true }));

//universal middleware
app.use((req, res, next) => {
    console.log(`method: ${req.method}, url: ${req.url}`);
    next();
});

//home route
app.use(homeRouter);

//about route
app.use(aboutRoute);

//contact route
app.use(contactRoute);

//Result Route
app.use(resultRoute);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`);
});