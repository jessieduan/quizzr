var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var db = req.db;
	console.log(db);
    var collection = db.get('quizzes');
    collection.find({},{},function(e,docs) {
        console.log(docs);
        console.log(JSON.stringify(docs));
        res.render('index', {
			title: 'Express',
			quizData: JSON.stringify(docs)
		});
    });
  //res.render('index', { title: 'Express' });
});

router.get('/allQuizData', function(req, res, next) {
    var db = req.db;
    console.log(db);
    var collection = db.get('quizzes');
    collection.find({},{},function(e,docs) {
        console.log(docs);
        console.log(JSON.stringify(docs));
        res.send(JSON.stringify(docs));
    });
  //res.render('index', { title: 'Express' });
});

router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Add New User' });
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    // Set our collection
    var collection = db.get('users');

    // Submit to the DB
    collection.insert({
        "name" : userName,
        "email" : userEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("mongotest");
            // And forward to success page
            res.redirect("mongotest");
        }
    });
});

module.exports = router;
