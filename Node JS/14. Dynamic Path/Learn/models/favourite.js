//core modules
const fs = require('fs');
const path = require('path');

//local modules
const absolutePath = require('../utils/pathUtils');

//data file path
const favouriteDataPath = path.join(absolutePath, 'data', 'favourite.json');

//Model
module.exports = class Favourite {
    static addToFavourite(houseId, callback) {
        Favourite.getFavourites((favourites) => {
            if(favourites.includes(houseId)) {
                callback("This House is already marked as favourite.");
            }
            else {
                favourites.push(houseId);
                fs.writeFile(favouriteDataPath, JSON.stringify(favourites), callback)
            }
        })
    }

    static getFavourites(callback) {
        fs.readFile(favouriteDataPath, (err, data) => {
            callback(!err ? JSON.parse(data) : []);
        }) 
    }
}



