//external modules
const express = require('express');

//Router
const userRouter = require('./Routers/userRouter');
const hostRouter = require('./Routers/hostRouter');

const app = express();


app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});

app.use(express.urlencoded());

//userRouter Middleware
app.use(userRouter);

//hostRouter Middleware
app.use('/host', hostRouter);

//404
app.use((req, res, next) => {
    res.status(404).send(`<h1>404 not found</h1>`);
});

app.listen(3000, () => {
    console.log(`Your server is running on http:///localhost:3000`);
});
