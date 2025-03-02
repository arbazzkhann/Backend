const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/students");

const studentsSchema = mongoose.Schema({
  name: String,
  age: Number,
  rollNO: Number,
  medium: String
});

module.exports = mongoose.model("class10", studentsSchema);