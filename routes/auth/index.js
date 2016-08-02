//로그인, 로그아웃과 관련된 라우팅
var express = require('express');
var app = express.Router();

//Controller 관리
var auth = require('../../controllers/auth');

//Common 관리
var common = require('../../controllers/common');

//Router 관리
var register = require('./register');

module.exports = function(app, passport) {

  app.use('/register', register);

  /* GET home page.
  app.get('/', function(req, res, next) {
    res.render('register', { title: 'Register Page' });
  });*/

  app.post('/register', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/register', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
  }));
}


module.exports = router;
