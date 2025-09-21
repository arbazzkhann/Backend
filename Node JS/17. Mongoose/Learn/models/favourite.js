//Favourite Model
module.exports = class Favourite {
    constructor(houseId) {
        this.houseId = houseId
    }

    //add to favourite
    save() {
        const db = getDB();
        return db.collection('favourites').findOne({houseId: this.houseId})
        .then(existingFav => {
            if(!existingFav) {
                return db.collection("favourites").insertOne(this);
            }
            return Promise.resolve();
        })

    }

    //Remove from Favourite
    static removeFromFavourite(deleteHouseId, callback) {
        const db = getDB();
        return db.collection('favourites').deleteOne({houseId: deleteHouseId});
    }

    static getFavourites() {
        const db = getDB();
        return db.collection('favourites').find().toArray();
    }
}


