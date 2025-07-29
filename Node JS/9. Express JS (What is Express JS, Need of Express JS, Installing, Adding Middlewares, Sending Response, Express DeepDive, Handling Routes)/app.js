//core modules
const http = require('http');

//external modules
const express = require('express');


//local Modules
const handleServer = require('./handleServer');


const app = express();


app.use((req, res, next) => {
    console.log("First middleware", req.url, req.method);

    res.send(`
        <html>
            <head><title>Express Introduction</title></head>
            <body>
                <h1>Hello world</h1>
            </body>
        </html>    
    `)

    next();
})
app.use((req, res, next) => {
    console.log("Second middleware", req.url, req.method);
    next();
})
app.use((req, res, next) => {
    console.log("Third middleware", req.url, req.method);
    next();
})



const PORT = 3000;
http.createServer(app).listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`);
});