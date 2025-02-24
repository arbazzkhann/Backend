const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/prectice1");

const studentsSchema = mongoose.Schema({
  name: String,
  class: String,
  rollNo: Number
})

module.exports = mongoose.model('students', studentsSchema);