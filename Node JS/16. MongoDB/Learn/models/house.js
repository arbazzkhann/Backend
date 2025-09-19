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

    save() {
        const db = getDB();
        if(this._id) { //update
            console.log("Save method: ", this);
            return db.collection('houses')
            .updateOne({
                _id: new ObjectId(String(this._id)) },
                    { $set: (() => { 
                        const copy = { ...this };
                        delete copy._id;
                        return copy;
                    })() 
                }
            );
        }
        else { //new
            return db.collection('houses')
            .insertOne(this);
        }
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
        const db = getDB();
        return db.collection('houses').deleteOne({_id: new ObjectId (String(houseId))});
    }
}