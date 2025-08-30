//database
const { ObjectId } = require('mongodb');
const { mongoConnect, getDB } = require('../utils/databaseUtils');


//Model
module.exports = class House {
    constructor(_id, name, price, location, imageURL, description ) {
        if(_id) {
            this._id = _id
        }
        this.name = name
        this.price = price
        this.location = location
        this.imageURL = imageURL
        this.description = description
    }

    // //Save house data into the json file
    save() {
        const db = getDB();
        return db.collection('houses').insertOne(this).then((result) => {
            console.log(result);
        });
    }
    
    //Retrieve all houses
    static fetchAll() {
        const db = getDB();
        return db.collection('houses').find().toArray();
    }

    static findById(houseId) {
        const db = getDB();
        return db.collection('houses').find({_id: new ObjectId (String(houseId))}).next();
    }

    static deleteById(houseId) {

    }
}