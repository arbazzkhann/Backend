const express = require('express');
const app = express();

//first middleware
app.use('/', (req, res, next) => {
    console.log(`first middleware, method: ${req.method} and url: ${req.url}`)
    next();
});

//second middleware
app.use('/submit-details', (req, res, next) => {
    console.log(`second middleware, submit-details page`);
    res.send(`
        <html>
            <head><title>Express Introduction</title></head>
            <body>
                <h1>This is submit-details page.</h1>
            </body>
        </html>    
    `);
})


app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
})