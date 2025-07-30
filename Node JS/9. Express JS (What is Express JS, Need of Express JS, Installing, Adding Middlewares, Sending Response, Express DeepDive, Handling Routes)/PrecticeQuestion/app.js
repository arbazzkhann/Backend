const express = require('express');

const app = express();

//First Middleware
app.use((req, res, next) => {
    console.log(`First middleware, request path is ${req.path}`);
    next();
});

//Second Middleware
app.use((req, res, next) => {
    console.log(`Second middleware, request method is ${req.method}`);
    next();
});

//Third Middleware
app.use((req, res, next) => {
    console.log(`Third middleware, request method is ${req.method}`);
    res.send(`
        <html>
            <head><title>Prectice Question</title></head>
            <body>
                <h1>DONE</h1>
            </body>
        </html>
    `);
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`);
});
