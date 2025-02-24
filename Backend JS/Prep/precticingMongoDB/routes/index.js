var express = require('express');
var router = express.Router();
var students = require("./users");

router.get("/create", async function(req, res, next) {
  const createdStudents = await students.create({
    name: "Manav",
    rollNo: 23,
    age: 17
  }); 
  res.send(createdStudents);
});

router.get("/allstudents", async function(req, res, next) {
  const allStudentsData = await students.find();
  res.send(allStudentsData);
});

module.exports = router;
