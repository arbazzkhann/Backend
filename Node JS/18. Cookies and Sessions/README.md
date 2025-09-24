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