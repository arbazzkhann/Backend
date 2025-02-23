1. Install mongoosejs:
    => npm i mongoose

2. Require and setup connection (connection stablish):
    => const mongoose = require("mongoose");
    => mongoose.connect("mongodb://127.0.0.1:27017/dbName");

3. Make schema (design of document):
    => const userSchema = mongoose.Schema({
        username: String,
        name: String,
        age: Number
    });

4. Create model and exports (it will create collection):
    => module.exports =  mongoose.model(collectionName, schema);