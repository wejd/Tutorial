var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('abouts', { title: 'Wejd' ,hello: 'test'});
});

module.exports = router;
