const { getDB } = require("../utils/databaseUtils");

//Favourite Model
module.exports = class Favourite {
    constructor(houseId) {
        this.houseId = houseId
    }

    //add to favourite
    save() {
        const db = getDB();
        return db.collection('favourites').insertOne(this);
    }

    //Remove from Favourite
    static removeFromFavourite(houseId, callback) {
        
    }


    static getFavourites() {
        const db = getDB();
        return db.collection('favourites').find().toArray();
    }
}


