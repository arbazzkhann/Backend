var express = require('express');
var router = express.Router();

let dbClass10 = require("./users")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/createclass10", async function(req, res, next) {
  const student = await dbClass10.create({
    name: "Madhav",
    age: 17,
    rollNo: 23,
    medium: "English"
  });
  res.send(student);
});

module.exports = router;
