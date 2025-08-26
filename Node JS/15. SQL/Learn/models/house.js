//database
const db = require('../utils/databaseUtils');


//Model
module.exports = class House {
    constructor(name, price, location, imageURL, description, id) {
        this.name = name,
        this.price = price,
        this.location = location,
        this.imageURL = imageURL,
        this.description = description,
        this.id = id
    }

    // //Save house data into the json file
    save() {
        return db.execute(
            'INSERT INTO houses (name, price, location, imageURL, description) VALUES (?, ?, ?, ?, ?)', [
                this.name, 
                this.price, 
                this.location, 
                this.imageURL, 
                this.description
            ]
        );
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