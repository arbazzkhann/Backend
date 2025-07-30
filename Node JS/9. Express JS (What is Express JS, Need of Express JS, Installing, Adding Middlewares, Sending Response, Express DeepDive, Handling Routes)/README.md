# Express.js

## What is Express.js ?

1. Express.js is a minimal and flexible **web application framework for Node.js**.
2. It provides a robust set of **features for building single-page**, **multi-page**, and **hybrid** web applications.
3. Express.js **simplifies server-side coding** by providing a **layer of fundamentals web application features**.


## Need of Express.js:

1. **Express.js Simplifies Server Creation**: Helps in **quickly setting** up and **running a web server without the need for complex coding**.
2. **Routing Management**: Provides a **powerful routing machanism** to **handle URLs** and **HTTP methods** effectively.
3. **Middleware Support**: Allows the use of **middleware to handle requests**, **response**, and **any middle operations**, making **code modular** and **maintainable**.
4. **API Development**: Facilitates **easy and efficient creation of RESTful APIs**.
5. **Community and Plugins**: Has a **large ecosystem** with **numerous plugins** and **extensions**, **accelerating development time**.


## Installation of Express.js:
 
```bash
npm install express
```

OR 

To Install Express temporarily and not add it to the dependencies list:
```bash
npm install express --no-save
```


## Middleware:
* In Express.js, middleware is a **function** that has **access to the request** (req), **response** (res), and the **next middleware** in the cycle.

* It is used to **modify requests** and **responses**, **execute any code**, **end the request-response cycle**, or **call the next middleware** in the stack.

![middleware](image.png)

### Example:
![middleware example](image-1.png)


## What is **next** in Express.js?
* In Express.js middleware, **next is a function** that tells Express to move to the **next middleware** or **route handler** in the stack.


## Creating Server with Express.js:

```js
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("First middleware", req.url, req.method);

    //sending html
    res.send(`
        <html>
            <head><title>Express Introduction</title></head>
            <body>
                <h1>Hello world</h1>
            </body>
        </html>    
    `);
});

//server creation
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```


# Handling Routers:

### Keypoints:
* **Order matters**,
* **"/"** matches everything,
* Can **not call next after res.send()**,
* Calling **res.send** **implicitly calls res.end()**


Syntax:
```js
app.use([path], callback [, callback...]);
```

#### Example:
```js
const express = require('express');
const app = express();

//first middleware
app.use('/', (req, res, next) => {
    console.log(`method: ${req.method} and url: ${req.url}`)
    next();
});

//second middleware
app.use('/submit-details', (req, res, next) => {
    console.log(`submit-details page`);
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
});
```


## Prectice Question:

```
Ques. Create a new project
    1. Install nodemon and express.
    2. Add two dummy middleware that logs request's path and request method respectively.
    3. Add a third middleware that return a response.
    4. Now add handling using two more middleware that handle path '/', a request to '/contact-us' page.
    5. Contact us should return a form with name and email as imput fields that submits to /contact-us page also.
    6. Also handle POST incoming request to '/contact-us' path using a separate middleware.
```

### Solving:

```js
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
```