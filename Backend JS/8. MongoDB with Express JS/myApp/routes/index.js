//Video link: https://youtu.be/ZpszSj3ziQk?t=3639

var express = require('express');
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// //creating user with express
// router.get('/create', async function(req, res, next) {
//   const createdUser = await userModel.create({
//     username: "xr_arbaz",
//     name: "Arbaz Khan",
//     age: 25
//   });
//   res.send(createdUser);
// });


////(.find) Returns all documents
// router.get('/allusers', async function(req, res, next) {
//   const allUsers = await userModel.find();
//   res.send(allUsers);
// })


////(.findOne) Returns only one document
router.get('/allusers', async function(req, res, next) {
  const allUsers = await userModel.findOne({name: "Arbaz Khan"});
  res.send(allUsers);
})



module.exports = router;
