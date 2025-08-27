//external modules
const express = require('express');

//local modules
const storeRouter = require('./Routers/user-routers/storeRouter.js');

const hostRouter = require('./Routers/host-routers/hostRouter.js');

//errors
const { pageNotFount } = require('./controllers/errors.js');

//import absolutePath
const abosolutePath = require('./utils/pathUtils.js');

//Database
const db = require('./utils/databaseUtils.js');

db.execute('SELECT * FROM houses')
.then(([rows, fields]) => {
    console.log('getting from database: ', rows);
})
.catch(err => {
    console.log("error while db houses records: ", err);
});

//express app
const app = express();

//view engine
app.set('view engine', 'ejs');

//static files intigration
// app.use(express.static(abosolutePath));
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

//for req.body
app.use(express.urlencoded());

// handlig store routers
app.use(storeRouter);

// handling host routers
app.use(hostRouter);

//404 status
app.use(pageNotFount);

//server connect
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`);
});