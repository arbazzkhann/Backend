var express = require('express');
var router = express.Router();

//mongoose
const userModel = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//create
router.get('/create', async function(req, res) {
  const userData = await userModel.create({
    username: "Arbaz Khan",
    nickname: "Arbaz",
    description: "I am arbaz khan learning backend for web dev.",
    categories: {
      type: ["web dev", "development", "creative", "web sites", "backend", "database"]
    }
  });
  res.send(userData);
});

//find
router.get('/find', async function(req, res) {
  const regexnew = RegExp("^Arbaz$", "i");
  const userData = await userModel.find({nickname: regexnew})
  res.send(userData);
});


//delete
router.get('/delete', async function(req, res) {
  // const userData = await userModel.deleteOne();
  const userData = await userModel.deleteMany();
  res.send(userData);
});





module.exports = router;
