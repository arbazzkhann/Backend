//external modules
const express = require('express');

//local modules
const storeRouter = require('./Routers/user-routers/storeRouter.js');

const hostRouter = require('./Routers/host-routers/hostRouter.js');

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

// handlig store routers
app.use(storeRouter);

// handling host routers
app.use(hostRouter);

//404 status
app.use(pageNotFount);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`);
});