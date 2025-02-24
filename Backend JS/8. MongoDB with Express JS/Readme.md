# 📌 Setting Up MongoDB (Mongoose)

## 🚀 Step 1: Install Mongoose
To install Mongoose, run the following command:

```sh
npm i mongoose
```

---

## 🔗 Step 2: Require and Setup Connection
Import Mongoose and establish a connection to your database:

```js
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/dbName");
```

---

## 🏗 Step 3: Create a Schema (Document Structure)
Define the schema for your collection:

```js
const userSchema = mongoose.Schema({
    username: String,
    name: String,
    age: Number
});
```

---

## 🏛 Step 4: Create a Model and Export It
Use the schema to create a model (collection) and export it:

```js
module.exports = mongoose.model("collectionName", schema);
```

---

📌 **Note:** `userModel` is an asynchronous function, so we use `async/await` to handle it properly.

---

## 📝 Ducument Creation ( .create() )
Create a new user document and save it in the database:

```js
router.get('/create', async function(req, res, next) {
    const createdUser = await userModel.create({
        username: "username_in_string",
        name: "name_in_string",
        age: age_in_numbers
    });
});
```

## 📝 Document Find ( .find() )
Displays all documents in collection:

```js
router.get('/allusers', async function(req, res, next) {
    const allUsers = await userModel.find();
});
```

## 📝 Document Find One ( .findOne() )
Displays Only one document in collection:

```js
router.get('/allusers', async function(req, res, next) {
    const allUsers = await userModel.findOne({name: "Arbaz"});
});
```

## 📝 Document Delete ( .deleteOne() )
It will delelte one document in collection:

```js
router.get('/deleteOne', async function(req, res, next) {
    const removeUser = await userModel.deleteOne();
});
```

## 📝 Find One and Delete document ( .findOneAndDelete() )
It will delelte one document in collection:

```js
router.get('/findOneAndDelete', async function(req, res, next) {
    const findOneAndDelete = await userModel.findOneAndDelete({age: 22});
});
```