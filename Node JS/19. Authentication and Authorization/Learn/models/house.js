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

//pre-hook
//when anywhere "findByIdAndDelete" function calls for "House" then run these statements to remove 
// houseSchema.pre("findByIdAndDelete", async function(next) {
//     console.log("Came for pre-hook for deleting house");    
//     const houseId = this.getQuery()._id;
//     await favourite.deleteMany({houseId});
//     next();
// }); 

//exporting as mongoose-model
module.exports = mongoose.model("House", houseSchema);