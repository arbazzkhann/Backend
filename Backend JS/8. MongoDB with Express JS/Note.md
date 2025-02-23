
#Setup MongoDB (mongoose):
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



Object creation:
    =>  router.get('/create', async function(req, res, next) {
            const createdUser = await userModel.create({
                username: "username_in_string",
                name: "name_in_string",
                age: age_in_numbers
            });
            res.send(createdUser);
        });
        
    //Note: userModel function is asynchronous because of that with should use async and wait with that.