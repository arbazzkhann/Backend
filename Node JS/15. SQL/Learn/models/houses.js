//database
const db = require('../utils/databaseUtils');


//Model
module.exports = class House {
    constructor(houseName, housePrice, houseState, housePhotoLink) {
        this.houseName = houseName,
        this.housePrice = housePrice,
        this.houseState = houseState,
        this.housePhotoLink = housePhotoLink
    }

    // //Save house data into the json file
    save(id) {
        
    }
    
    //Retrieve all houses
    static fetchAll() {
        return db.execute('SELECT * FROM houses')
    }

    static findById(houseId, callback) {
      
    }

    static deleteById(houseId, callback) {
      
    }
}