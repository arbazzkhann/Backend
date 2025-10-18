//core modules
const path = require("path");

//external modules
const express = require('express');

//local modules
const { pageNotFount } = require('./controllers/errors.js');

//express app
const app = express();

//DB
const DB_PATH = "mongodb+srv://arbazfanda3:root@arbazkhan.nmsxldo.mongodb.net/mywebsite?retryWrites=true&w=majority&appName=ArbazKhan";
const { default: mongoose } = require('mongoose');
 
//static files intigration
// app.use(express.static(abosolutePath));
app.use(express.static(path.join(__dirname, "public")));


//middleware for "URL" and "request method"
app.use((req, res, next) => {
    console.log(`Current URL: ${req.url} and method: ${req.method}`);
    next();
});

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