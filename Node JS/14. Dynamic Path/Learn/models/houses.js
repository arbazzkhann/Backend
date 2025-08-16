//core modules
const fs = require('fs');
const path = require('path');

//local modules
const absolutePath = require('../utils/pathUtils');

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
            const housesDataPath = path.join(absolutePath, 'data', 'homes.json'); //path
            registeredHouse.push(this);
            fs.writeFile(housesDataPath, JSON.stringify(registeredHouse), err => {
                if(err) console.log('error occur: ', err);
                else console.log("Save done!");
            });
        }) 
    }

    //Retrieve all houses
    static fetchAll(callback) {
        const housesDataPath = path.join(absolutePath, 'data', 'homes.json');
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
}