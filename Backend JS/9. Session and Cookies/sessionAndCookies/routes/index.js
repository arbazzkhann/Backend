var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie("age", 25); //cookie
  res.render('index', { title: 'Express' });
});

//Ban route
router.get('/ban', function(req, res, next) {
  req.session.ban = true;
  res.render("ban");
  console.log(req.session)
});

//Unban route
router.get('/removeban', function(req, res, next) {
  req.session.ban = false;
  console.log(req.session);
  res.send("Ban removed successfully.");
});

//check ban route
router.get('/checkban', function(req, res, next) {
  console.log(req.session)
  if(req.session.ban == true) {
    res.send("You are banned");
  }
  else if(req.session.ban == false){
    res.send("You are Unbanned")
  }
});

//destroy session
router.get('/sessiondestroy', function(req, res) {
  req.session.destroy(function(err) {
    if(err) throw err;
    res.send("Ban removed");
  })
});


//reading cookie
router.get('/readcookie', function(req, res, next) {
  console.log(req.cookies);
  res.send('see console');
});

//deleting cookie
router.get('/deletecookie', function(req, res, next) {
  res.clearCookie("age");
  res.send("cookie removed");
})

module.exports = router;
