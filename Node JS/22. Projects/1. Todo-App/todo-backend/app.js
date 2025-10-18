//core modules
const path = require("path");

//external modules
const express = require('express');
const cors = require("cors");

//local modules
const { pageNotFount } = require('./controllers/errors.js');
const todoRouter = require('./Routers/todoItemsRouter.js')

//DB
const DB_PATH = "mongodb+srv://arbazfanda3:root@arbazkhan.nmsxldo.mongodb.net/mywebsite?retryWrites=true&w=majority&appName=ArbazKhan";
const { default: mongoose } = require('mongoose');

//express app
const app = express();


//static files intigration
// app.use(express.static(abosolutePath));
app.use(express.static(path.join(__dirname, "public")));



app.use(cors());
app.use(express.json());


//todo
app.use(todoRouter);

//404 status
app.use(pageNotFount);









//Server and DB Start here
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