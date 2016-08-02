//프로젝트 관리와 관련된 라우팅
var express = require('express');
var router = express.Router();

//Controller 관리
var project = require('../../controllers/project');

//Common 관리
var common = require('../../controllers/common');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('project', { title: 'Project Page' });
});

module.exports = router;
