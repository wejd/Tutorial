var express = require('express');
var router = express.Router();
var fs=require('fs');
var path = require('path');
/* GET home page. */
router.get('/', function(req, res) {
 // res.set('content-type','text/html');
 // res.send( fs.readFileSync('./views/index.html','utf8'));
 // res.end();
  res.render('./home')
});

module.exports = router;
