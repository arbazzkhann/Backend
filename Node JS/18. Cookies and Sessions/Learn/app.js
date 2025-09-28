//external modules
const express = require('express');

//local modules
const storeRouter = require('./Routers/user-routers/storeRouter.js');

const hostRouter = require('./Routers/host-routers/hostRouter.js');

const authRouter = require('./Routers/auth-routers/authRouter.js');

//errors
const { pageNotFount } = require('./controllers/errors.js');

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

//checking user isLoggedIn or not
app.use((req, res, next) => {
    console.log("Cookie check middlware.", req.get('Cookie'));
    req.isLoggedIn = req.get('Cookie') ? req.get("Cookie").split("=")[1] === "true" : false;
    next();  //next middleware
});


//authentication middleware
app.use('/host', (req, res, next) => {
    console.log("isLoggedIn:", req.isLoggedIn)
    if(req.isLoggedIn){
        next();
    }
    else {
        res.redirect('/login');
    }
});




// handling auth router
app.use(authRouter);

// handling store routers
app.use(storeRouter);

// handling host routers
app.use(hostRouter);

//404 status
app.use(pageNotFount);

//server connect
const PORT = 3000;


//database path string
const DB_PATH = "mongodb+srv://arbazfanda3:root@arbazkhan.nmsxldo.mongodb.net/mywebsite?retryWrites=true&w=majority&appName=ArbazKhan";

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
});