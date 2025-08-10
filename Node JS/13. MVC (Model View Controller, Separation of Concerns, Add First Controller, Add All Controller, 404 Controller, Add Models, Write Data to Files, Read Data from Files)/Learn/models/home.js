//dummy Database
const registeredHousesArray = [];

module.exports = class Home {
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