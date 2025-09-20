//external modules
const express = require('express');

//local modules
const storeRouter = require('./Routers/user-routers/storeRouter.js');

const hostRouter = require('./Routers/host-routers/hostRouter.js');

//errors
const { pageNotFount } = require('./controllers/errors.js');

//Database
const { mongoConnect } = require('./utils/databaseUtils.js');

//Mongoose  
const { default: mongoose } = require('mongoose');

//MySQL
// db.execute('SELECT * FROM houses')
// .then(([rows, fields]) => {
//     console.log('getting from database: ', rows);
// })
// .catch(err => {
//     console.log("error while db houses records: ", err);
// });

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


//database path string
const DB_PATH = "mongodb+srv://arbazfanda3:root@arbazkhan.nmsxldo.mongodb.net/?retryWrites=true&w=majority&appName=ArbazKhan/mywebsite";

//db connect with mongoose
mongoose.connect(DB_PATH)
.then(() => {
    console.log(`Connected to MongoDB`);
    app.listen(PORT, () => {
        console.log(`Your server is running on http://localhost:${PORT}`);
    });
})
.catch(err => {
    console.log("Error while connecting to MongoDB: ", err);
})