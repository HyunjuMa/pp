//로그인, 로그아웃과 관련된 라우팅
var express = require('express');
var router = express.Router();

//Controller 관리
var auth = require('../../controllers/auth');

//Common 관리
var common = require('../../controllers/common');

//Router 관리
var register = require('./register');

router.use('/register', register);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Register Page' });
});

module.exports = router;
