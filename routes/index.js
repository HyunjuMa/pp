var express = require('express');
var router = express.Router();

var auth = require('./auth');
var project = require('./project');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard');
});

router.use('/auth', auth);
router.use('/project', project);

module.exports = router;
