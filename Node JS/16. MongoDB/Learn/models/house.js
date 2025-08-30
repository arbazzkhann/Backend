//database
const { mongoConnect, getDB } = require('../utils/databaseUtils');


//Model
module.exports = class House {
    constructor(id, name, price, location, imageURL, description ) {
        this.id = id,
        this.name = name,
        this.price = price,
        this.location = location,
        this.imageURL = imageURL,
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

    }

    static deleteById(houseId) {

    }
}