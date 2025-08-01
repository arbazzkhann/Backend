# Express JS DeepDive

## Parsing Request:

### body parser (Not recommended):

```bash
npm install body-parser
```

#### Syntax body-parser:
```js
//module import
const bodyParser = require('body-parser');

//urlencoded middleware
app.use(bodyParser.urlencoded());

//use
req.body._name_
```

#### Example:
```js
//external modules
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//url encoded
app.use(bodyParser.urlencoded());
:
// handling '/' form page on GET:
app.get('/', (req, res, next) => {
    res.send(`
        <html>
            <head><title>Prectice Question</title></head>
            <body>
                <h2>Enter your details</h2>
                <form action="/submitted" method="post">
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
    next();
});

// submitted page:
app.post('/submitted', (req, res, next) => {
    //using body-parser
    console.log(`Handling contact-us on POST request, url: ${req.url} and method: ${req.method}, ${req.body.name}`);
    res.send(`
        <html>
            <head><title>Prectice Question</title></head>
            <body>
                <h2>Hello, ${req.body.name}</h2>
                <h3>You are loggedin with ${req.body.email}</h3>
            </body>
        </html>
    `);
});


//server listen
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`);
});
```


## Express Router:

Step 1: Create "Routers" directory.

Step 2: In Routers directory, create _route_name_.js

Step 3: Import "express" and "express.Router":
```js
const express = require('express');
const hostRouter = express.Router();
```

Step 4: Create middleware like that:
```js
_route_name_.get('/_router_path_', (req, res, next) => {
    res.send(`
        <h1>Welcome to my Website</h1>
    `);
});
```

Step 5: Export:
```js
module.exports = _route_name;
```

Step 6: Import and Use in "app.js":
```js
const _router_name_ = require('./Routers/_route_name_');

app.use(_router_name_);
```

### Example of Routers in Express:

Router:
```js
/***** userRouter.js *****/
const express = require('express');
const userRouter = express.Router();

userRouter.get('/', (req, res, next) => {
    res.send(`
        <h1>Welcome to my Website</h1>
    `);
});

module.exports = userRouter;
```

Main Entry Point:
```js
/***** app.js *****/

//external modules
const express = require('express');

//userRouter import
const userRouter = require('./Routers/userRouter');

const app = express();


app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});

//userRouter Middleware
app.use(userRouter);

app.listen(3000, () => {
    console.log(`Your server is running on http:///localhost:3000`);
});
```