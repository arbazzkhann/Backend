# 📌 Session Creation in Express

## 🚀 Step 1: Install Express-Session
Run the following command to install `express-session`:

```sh
npm i express-session
```

---

## 🔗 Step 2: Require Express-Session
Import `express-session` in your project:

```js
const session = require("express-session");
```

---

## 🏗 Step 3: Configure Session in `app.js`
Add the following middleware to `app.js` to set up session handling:

```js
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "anyRandomText"
}));
```

---

## 📝 Step 4: Use Session in Your Express Project
You can now use session variables like this:

```js
req.session.ban = true;
```

✅ Your Express app now supports session management!


## Destroy session

```js
req.session.destroy(call_Back_Function);
```


# 📌 Cookies

## 🚀 Step 1: Require cookie-parser
require the `cookie-parser` in app.js (it already installed and required after `express-generator` installation)

## 🚀 Step 2: Creating cookie
Do all cookie function in `router.get`

```js
res.cookie(cookie_name, value);
```

## 🚀 Step 3: Using cookie

```js
req.cookies;
```

## 🚀 Step 4: Deleting cookie

```js
res.clearCookie(cookie_Name)
```