//회원 가입과 관련된 라우팅
var express = require('express');
var router = express.Router();

//Controller 관리
var register = require('../../controllers/register');

//Common 관리
var common = require('../../controllers/common');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Register Page' });
});

module.exports = router;
