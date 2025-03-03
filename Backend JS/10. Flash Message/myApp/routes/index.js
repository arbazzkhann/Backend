var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

//creating flash message
router.get('/failed', function(req, res) {
  req.flash("world", "8 Billion");
  res.send("flash created.");
});

//using flash message
router.get('/check', function(req, res) {
  res.send(req.flash("world"))
});





module.exports = router;
