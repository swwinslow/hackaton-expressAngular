var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');

/* GET home page. */
router.get('/', function(req, res, next){
  res.cookie('cookieName', 'cookieValue')
   res.render('game4', { title: 'Express' });


});

module.exports = router;
