//database
const db = require('../utils/databaseUtils');


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
        if(this.id) {  //update house
           return db.execute(
                `UPDATE houses 
                SET name=?, price=?, location=?, imageURL=?, description=? 
                WHERE id=?`, 
                [
                    this.name, 
                    this.price, 
                    this.location, 
                    this.imageURL,
                    this.description,
                    this.id
                ]
            );  
        }
        else { //insert new houses
            return db.execute(
                `INSERT INTO houses (name, price, location, imageURL, description) 
                VALUES (?, ?, ?, ?, ?)`, 
                [
                    this.name, 
                    this.price, 
                    this.location, 
                    this.imageURL, 
                    this.description
                ]
            );
        }
    }
    
    //Retrieve all houses
    static fetchAll() {
        return db.execute('SELECT * FROM houses')
    }

    static findById(houseId) {
        return db.execute('SELECT * FROM houses WHERE id=?', [houseId]);
    }

    static deleteById(houseId) {
      return db.execute('DELETE FROM houses WHERE id=?', [houseId]);
    }
}