//Video link: https://youtu.be/ZpszSj3ziQk?t=3639

var express = require('express');
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

////creating user with express
router.get('/create', async function(req, res, next) {
  const createdUser = await userModel.create({
    username: "vijeta243",
    name: "Vijeta Sharma",
    age: 28
  });
  res.send(createdUser);
});


////(.find) Returns all documents
router.get('/allusers', async function(req, res, next) {
  const allUsers = await userModel.find();
  res.send(allUsers);
});


////(.findOne) Returns only one document
router.get('/oneuser', async function(req, res, next) {
  const oneuser = await userModel.findOne({name: "Arbaz Khan"});
  res.send(oneuser);
});


////(.deleteOne) remove one document
router.get('/deleteOne', async function(req, res, next) {
  const removeUser = await userModel.deleteOne();
  res.send(removeUser);
});


////(.findOneAndDelete) remove one document
router.get('/findOneAndDelete', async function(req, res, next) {
  const findOneAndDelete = await userModel.findOneAndDelete({
    age: 22
  });
  res.send(findOneAndDelete);
});


module.exports = router;
