var express = require('express');
var router = express.Router();

let testingCollection = require("./users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Hello home page.");
});

router.get('/create', async function(req, res) {
  let createdData = await testingCollection.create({
    name: "Arbaz Khan",
    username: "xr_arbaz",
    description: "I am a web developer",
    categories: {
      type: ["web dev", "frontend", "backend", "fullstack", "technology", "websites"],
    }
  });

  res.send(createdData);
});

router.get('/show', async function (req, res) {
  let showData = await testingCollection.find({name: RegExp("^ArBaz KHaN$", 'i')});
  res.send(showData);
})


module.exports = router;
