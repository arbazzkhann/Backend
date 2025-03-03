var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send("Home page");
});

router.get('/ban', function(req, res, next) {
  req.session.ban = true;
  res.send("You are banned now");
});


router.get('/isban', function(req, res, next) {
  if(req.session.ban == true) {
    res.send("you are banned");
  }
  else {
    res.send("Not banned");
  }

});

router.get('/removeban', function(req, res, next) {
  if(req.session.ban == true) {
    req.session.ban == false;
    res.send("You are unbanned");
  }
  else {
    res.send("Not ban");
  }
});



//cookies
router.get("/createCookie", function(req, res, next) {
  res.cookie("arbazAge", 22);
  res.send(req.cookies);
});

router.get("/showCookies", function(req, res, next) {
  console.log(req.cookies)
  res.send("See console.");
});



module.exports = router;
