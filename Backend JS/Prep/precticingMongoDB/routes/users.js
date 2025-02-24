var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/studentsDatabase");

const studentSchema = mongoose.Schema({
  name: String,
  age: Number,
  rollNo: Number
});

module.exports = mongoose.model("studentsData", studentSchema);