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
app.use(hostRouter);



app.listen(3000, () => {
    console.log(`Your server is running on http:///localhost:3000`);
})
