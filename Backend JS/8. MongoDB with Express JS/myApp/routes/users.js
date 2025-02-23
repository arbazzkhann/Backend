//Require 
const mongoose = require("mongoose");

//setup connection
mongoose.connect("mongodb://127.0.0.1:27017/dbName");

//Making schema
const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number
});

//creating model and exporting
module.exports = mongoose.model("userData", userSchema);
