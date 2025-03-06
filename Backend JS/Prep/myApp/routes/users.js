let mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testDB");

let mongooseSchema = mongoose.Schema({
  name: String,
  username: String,
  description: String,
  categories: {
    type: Array,
    default: []
  },
  dateCreated: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("testingCollection", mongooseSchema)