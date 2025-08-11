//core modules
const fs = require('fs');
const path = require('path');

//local modules
const absolutePath = require('../utils/pathUtils');

//dummy Database
let registeredHousesArray = [];

//Model
module.exports = class House {
    constructor(houseName, housePrice, houseState, housePhotoLink) {
        this.houseName = houseName,
        this.housePrice = housePrice,
        this.houseState = houseState,
        this.housePhotoLink = housePhotoLink
    }

    //Save house data into the array
    save() {
        registeredHousesArray.push(this);
        const housesDataPath = path.join(absolutePath, 'data', 'homes.json');

        fs.writeFile(housesDataPath, JSON.stringify(registeredHousesArray), err => {
            if(err) console.log('error occur: ', err);
            return registeredHousesArray;
        }); 
    }

    //Retrieve all houses
    static fetchAll() {
        const housesDataPath = path.join(absolutePath, 'data', 'homes.json');
        fs.readFile(housesDataPath, (error, data) => {
            if(!error) {
                return registeredHousesArray = JSON.parse(data);
            }
        });
        return registeredHousesArray;
    }
}