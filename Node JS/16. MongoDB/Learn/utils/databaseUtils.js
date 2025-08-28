const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const MONGO_URL = "mongodb+srv://arbazfanda3:root@arbazkhan.nmsxldo.mongodb.net/?retryWrites=true&w=majority&appName=ArbazKhan";


module.exports = mongoConnect = (callback) => {
    MongoClient.connect(MONGO_URL)
    .then(client => {
        callback(client);
    })
    .catch(err => {
        console.log('Error while connect to mongoDB', err);
    });
}