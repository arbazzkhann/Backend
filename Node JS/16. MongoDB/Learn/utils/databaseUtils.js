const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const MONGO_URL = "mongodb+srv://arbazfanda3:root@arbazkhan.nmsxldo.mongodb.net/?retryWrites=true&w=majority&appName=ArbazKhan";

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect(MONGO_URL)
    .then(client => {
        callback();
        _db = client.db('mywebsite')
    })
    .catch(err => {
        console.log('Error while connect to mongoDB', err);
    });
}

const getDB = () => {
    if(!_db) {
        throw new Error();
    }
    return _db;
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;


