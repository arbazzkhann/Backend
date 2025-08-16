//core modules
const fs = require('fs');
const path = require('path');

//local modules
const absolutePath = require('../utils/pathUtils');

//data file path
const housesDataPath = path.join(absolutePath, 'data', 'houses.json');

//Model
module.exports = class House {
    constructor(houseName, housePrice, houseState, housePhotoLink) {
        this.houseName = houseName,
        this.housePrice = housePrice,
        this.houseState = houseState,
        this.housePhotoLink = housePhotoLink
        this.houseId = Math.floor(10000000 + Math.random() * 90000000);
    }

    //Save house data into the json file
    save() {
        House.fetchAll(registeredHouse => {
            registeredHouse.push(this);
            fs.writeFile(housesDataPath, JSON.stringify(registeredHouse), err => {
                if(err) console.log('error occur: ', err);
                else console.log("Save done!");
            });
        }) 
    }

    //Retrieve all houses
    static fetchAll(callback) {
        fs.readFile(housesDataPath, (error, data) => {
            // callback(!error ? JSON.parse(data) : []);
            if(!error) {
                callback(JSON.parse(data));
            }
            else {
                console.log(error)
                callback([]);
            }
        });
    }

    static findById(houseId, callback) {
        this.fetchAll((houses) => {
            const houseFound = houses.find(house => house.houseId == houseId);
            callback(houseFound);
        });
    }
}