//external modules
const express = require('express');

const multer = require('multer');
//session 
const session = require('express-session');
const MongoDBStore = require("connect-mongodb-session")(session);

//DB
const DB_PATH = "mongodb+srv://arbazfanda3:root@arbazkhan.nmsxldo.mongodb.net/mywebsite?retryWrites=true&w=majority&appName=ArbazKhan";
const { default: mongoose } = require('mongoose');
 
//local modules
const storeRouter = require('./Routers/user-routers/storeRouter.js');
const hostRouter = require('./Routers/host-routers/hostRouter.js');
const authRouter = require('./Routers/auth-routers/authRouter.js');
const { pageNotFount } = require('./controllers/errors.js');


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

//uploads directory - accessing from frontend
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/host/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/house/uploads", express.static(path.join(__dirname, "uploads")));

//ramdom string function
const randomString = (length) => {
    const charactors = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for(let i = 0; i < length; i++) {
        result += charactors.charAt(Math.floor(Math.random() * charactors.length));
    }
    return result;
}

//fileFilter function
const fileFilter = (req, file, cb) => {
    if(file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
}

//image save into storage
const storage = multer.diskStorage({
    //Set the destination folder for uploaded files
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Files will be saved in 'uploads' directory
    },

    //Set the filename for uploaded Files
    filename: (req, file, cb) => {
        cb(null, randomString(10) + '-' + file.originalname);
    }
});
const multerOptions = {
    storage,
    fileFilter
}
app.use(express.urlencoded());
app.use(multer(multerOptions).single('image'));

//for bodyparser

//middleware for "URL" and "request method"
app.use((req, res, next) => {
    console.log(`Current URL: ${req.url} and method: ${req.method}`);
    next();
});

const store = new MongoDBStore({
    uri: DB_PATH,
    collection: "sessions"
})

//session
app.use(session({
    secret: "Arbaz Khan Secret",
    resave: false,
    saveUninitialized: true,
    store
}));

//checking user isLoggedIn or not
app.use((req, res, next) => {
    // req.isLoggedIn = req.get('Cookie') ? req.get("Cookie").split("=")[1] === "true" : false;  //for cookie
    req.isLoggedIn = req.session.isLoggedIn;
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