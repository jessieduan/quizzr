var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var db = req.db;
    db.get('users').find({},{},function(e,userDocs) {
        console.log(userDocs);
        db.get('quizzes').find({}, {}, function(e, quizDocs) {
            console.log(quizDocs);
            res.render('mongotest', {
                users: userDocs,
                quizzes: quizDocs
            });
        });

    });
});

module.exports = router;
