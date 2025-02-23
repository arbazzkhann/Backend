//Video link: https://youtu.be/ZpszSj3ziQk?t=3639

var express = require('express');
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//creating user with express
router.get('/create', async function(req, res, next) {
  const createdUser = await userModel.create({
    username: "xr_arbaz",
    name: "Arbaz Khan",
    age: 25
  });
  res.send(createdUser);
});


module.exports = router;
