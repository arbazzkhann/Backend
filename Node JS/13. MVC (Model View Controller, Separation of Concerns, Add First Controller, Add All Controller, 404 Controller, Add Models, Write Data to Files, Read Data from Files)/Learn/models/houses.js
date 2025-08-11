//core modules
const fs = require('fs');
const path = require('path');

//local modules
const absolutePath = require('../utils/pathUtils');

//dummy Database
const registeredHousesArray = [];

module.exports = class House {
    constructor(houseName, housePrice, houseState, housePhotoLink) {
        this.houseName = houseName,
        this.housePrice = housePrice,
        this.houseState = houseState,
        this.housePhotoLink = housePhotoLink
    }

    save() {
        registeredHousesArray.push(this);
    }

    static fetchAll() {
        return registeredHousesArray;
    }
}