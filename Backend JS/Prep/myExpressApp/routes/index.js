var express = require('express');
var router = express.Router();

var precticeDatabase = require('./users');

router.get('/', function(req, res, next) {
  res.send("Successfull.");
});

router.get('/create', async function(req, res, next) {
  const createNewStudent = await precticeDatabase.create({
    name: "Arbaz Khan",
    class: "12th",
    age: 19
  });
  res.send(createNewStudent);
});

router.get('/allStudents', async function(req, res, next) {
  const allStudents = await precticeDatabase.find();
  res.send(allStudents);
});

module.exports = router;
