# Cookies and Session

## What are cookies?

<img src="cookies-working-flow.png" height="300px"/>

* **Cookies** are small pieces of ***data stored in user's browser*** by the server.

* They help **websites remember user information** and **preferences** between *** page loads*** or ***visits***.

* Cookies can **manage user sessions** and **store data for personalized experiences**.


## Adding Login Functionality in Project:

1. Add a *login button to the nav bar* pointing to **/login**.

2. Create a **auth router** to handle **login related routes**, register the new router in app.js

3. Create a **auth controller** to handle **GET request** for **/login** and return UI that does the following:
    * Accepts **email** and **password**.
    * Has a **Login button** that submits the form to **/login** with a POST request.

4. Add a **POST login path** in **router and handler** in controller.

5. ***Assume the person logged-in*** and ***redirect them to the home page***.


## Checking Login State:

1. Add a **isLoggedIn** field in the **req** object and use it everywhere.

2. **Add a condition** in the **navigation ejs** file that no path other then **home and login** should be visible until a user has logged-in.

3. **Fix** all the **render calls** to send the flag.

4. Also add a **middleware for host routes** that if the user is **not logged** in they should be **redirected to the login page**.


## Using a Cookie:

1. Understand why a **global variable** would **not work**.

2. Set a **cookie on successful login**. See it in storage, also on the next request.

3. Read the cookie using syntax and Define a middleware to set this value to the request object.

```js
console.log(req.get("Cookie").split("=")[1]);
```

4. **Change the cookie from the browser** and see the result.


## How to use Cookie:

### Setting Cookie:
```js
const postLogin = (req, res, next) => {
    res.cookie("isLoggedIn", "true");   //setting cookie
    res.redirect('/');  //redirect to home
}
```

### Using Cookie:
```js
app.use((req, res, next) => {
    console.log("Cookie check middlware.", req.get('Cookie'));
    req.isLoggedIn = req.get('Cookie')?.split('=')[1] || false;
    next();  //next middleware
});
```


## Define the Logout Feature:

1. Define a **logout button** in **nav bar** that should come only **when user is loggedIn**. Button should be a form that submits to link **/logout**.

2. **Hide the login button** in case **user is loggedIn**.

3. Handle the **logout path** and set the **isLoggedIn cookie to false**.


## Problem with Cookies?

1. Cookies can be **intercepted** or **stolen**, posting **security risks**.

2. They have **limited storage capacity** (***about 4KB***).

3. Users can **delete** or **modify** cookies, leading to **data loss** or **tampering**. (*Tempering means unwanted modifying*)

4. Data in cookies is **not encrypted**, making **sensitive information vulnerable**.

5. Storing important information in cookies exposes it to **client-side attacks**.


## What are Sessions?

<img src="session.png" height="330px"/>

1. Sessions are **server-side storage mechanisms** that track user interactions with a website.

2. They **maintain user state** and **data across multiple requests** in a web applications.

3. Sessions enable **persistent user experiences** by **maintaining state between the client and server** ***over stateless HTTP***.


## Sessions:

### Install Express Session Package:
```bash
npm install express-session
```

### Session Example:
```js
const session = require("express-session");

app.use(session({
    //"secret" key used to sign the session ID cookie and encrypt session data
    secret: "Arbaz Khan Secret",
    //Forces session to be "saved back" to the session store, even if not modified
    resave: false,
    //Forces a session that is "uninitialized" to be saved to the store
    saveUninitialized: true
}));
```


## Creating Session for Project:

1. **Sensitive info** is **stored on server**.

2. Same **session is valid for all requests from one user**, **using cookies**.

3. **Remove setting the cookie** and now **save the flag in session**.

4. **Check the browser** for **cookie changes**.

5. **Log Session** in some **get request**.

6. **Try to use** a **different browser** and show that **session is different**.

7. Session are **stored in memory** so they **reset when server restarts**.


## Saving Session in Database:

1. Install mongodb-session:
```bash
npm install connect-mongodb-session
```

2. Configure:
```js
const session = require("express-session");  //session require

const MongoDBStore = require("connect-mongodb-session")(session);

//creating store
const store = new MongoDBStore({
    uri: DB_PATH,
    collection: "sessions"
})

//session
app.use(session({
    secret: "Arbaz Khan Secret",
    resave: false,
    saveUninitialized: true,
    store: store //now all sessions is save into "store"
}));
```