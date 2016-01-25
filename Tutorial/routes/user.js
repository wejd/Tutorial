var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {

    var users= {nom:'wejd',prenom:'daghfous'};
    res.json(users);
});

module.exports = router;
