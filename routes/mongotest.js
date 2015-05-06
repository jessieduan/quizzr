var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var db = req.db;
    var collection = db.get('users');
    collection.find({},{},function(e,docs) {
        console.log(docs);
        res.render('mongotest', { users: docs });
    });
});

module.exports = router;
