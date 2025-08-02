const express = require('express');
const hostRouter = express.Router();


//form GET
hostRouter.get('/host/add-home', (req, res, next) => {
    res.send(`
        <html>
            <head><title>Add Home</title></head>
            <body>
                <h2>ADD HOME PAGE</h2>
                <form action="/host/add-home" method="POST">
                    <label>House Name: </label>
                    <input name="houseName" type="text" placeholder="Enter house name"> 

                    <br/><br/>

                    <button type="submit">Submit</button>
                </form>
            </body>
        </html>
    `);
});

//form POST
hostRouter.post('/host/add-home', (req, res, next) => {
    res.send(`
        <html>
            <head><title>Add Home</title></head>
            <body>
                <h2>Home register successfully</h2>
                <h3>House name is ${req.body.houseName}</h3>
            </body>
        </html>
    `);
});

module.exports = hostRouter;