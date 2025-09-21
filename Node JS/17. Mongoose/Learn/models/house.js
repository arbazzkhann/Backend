const mongoose = require('mongoose');

const houseSchema = mongoose.Schema({
    houseName: {
        type: String, 
        required: true
    },
    housePrice: {
        type: Number, 
        required: true
    },
    houseLocation: {
        type: String, 
        required: true
    },
    houseImageURL: String,
    houseDescription: String
});

//exporting as mongoose-model
module.exports = mongoose.model("House", houseSchema);