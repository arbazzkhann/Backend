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

3. Users can **delete** or **modify** cookies, leading to **data loss** or **tampering**.

4. Data in cookies is **not encrypted**, making **sensitive information vulnerable**.

5. Storing important information in cookies exposes it to **client-side attacks**.