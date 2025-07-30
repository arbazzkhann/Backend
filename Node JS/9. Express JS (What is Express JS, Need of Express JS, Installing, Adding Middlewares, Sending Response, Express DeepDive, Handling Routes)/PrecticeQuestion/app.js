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
// app.use((req, res, next) => {
//     console.log(`Third middleware, request method is ${req.method}`);
//     res.send(`
//         <html>
//             <head><title>Prectice Question</title></head>
//             <body>
//                 <h1>DONE</h1>
//             </body>
//         </html>
//     `);
// });

// handlig '/' on get
app.get('/', (req, res, next) => {
    console.log(`Handling / for get, request method is ${req.method}`);
});

// handling '/contact-us' on GET
app.get('/contact-us', (req, res, next) => {
    res.send(`
        <html>
            <head><title>Prectice Question</title></head>
            <body>
                <h2>Enter your details</h2>
                <form action="/contact-us" method="post">
                    <label>Name: </label>
                    <input name="name" type="text" placeholder="Enter full name"> 

                    <br/><br/>

                    <label>Email:</label>
                    <input name="email" type="email" placeholder="Enter email address">
                    
                    <br/><br/>

                    <button type="submit">Submit</button>
                </form>
            </body>
        </html>
    `);
});

// handling '/contact-us' on POST
app.post('/contact-us', (req, res, next) => {
    console.log(`Handling contact-us on POST request, url: ${req.url} and method: ${req.method}`);
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`);
});