# 📌 Flash Messages in Express

📌 **Note:** Flash messages allow you to pass data from one route to another.

---

## 🚀 Step 1: Setup Express-Session
Ensure that `express-session` is installed and configured in your project.

---

## 🔗 Step 2: Install `connect-flash`
Run the following command to install `connect-flash`:

```sh
npm i connect-flash
```

✅ Make sure to include `connect-flash` in your middleware setup:

```js
const flash = require("connect-flash");
app.use(flash());
```

---

## 🏗 Step 3: Creating a Flash Message
Use the following syntax to create a flash message:

```js
req.flash("name", value);
```

---

## 📝 Step 4: Using a Flash Message
Retrieve and use a flash message:

```js
req.flash("name");
```

✅ Your Express app now supports flash messages!
