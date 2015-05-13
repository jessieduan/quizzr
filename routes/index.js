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

router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Add New User' });
});

/* POST when question answer is submitted */
router.post('/submitanswer', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userEmail = req.body.useremail;
    var quizID = req.body.quizID;
    var questionID = req.body.questionID;
    var answerID = req.body.answerID;
    var explanationWritten = req.body.explanationWritten; // or none exists
    var explanationVotedFor = req.body.explanationVotedFor; // or none exists
    var wasUpvote = req.body.wasUpvote; // or none exists

    var explanationWrittenID = -1;

    var quiz = db.quizzes.findOne({ quiz_id: quizID });
    var isCorrect = (answerID == quiz["" + questionID]["correct_answer_id"]);

    // HACKS ON HACKS ON HACKS - can't use $push, so we resort to manually updating collections instead
    // add explanation
    if (explanationWritten) {
        db.quizzes.find({ quiz_id: quizID }).forEach(function (doc) {
            var explanations = doc["questions"]["" + questionID]["answers"]["" + answerID]["explanations"];
            explanationWrittenID = explanations.length + 1;
            explanations.push({
                "explanation_id": explanationWrittenID,
                "explanation": explanationWritten,
                "upvotes": 0
            });
            db.quizzes.save(doc, function (err, doc) {
                if (err) res.send("There was a problem adding the information to the database.");
            });
        });
    }

    // update upvotes for explanation
    if (explanationVotedFor) {
        // TODO
    }

    // update users with user attempt
    db.users.find({ email: userEmail }).forEach(function (user) {
        user["quizzes_taken"]["" + quizID]["attempts"].push({
            "question_id": questionID,
            "is_correct": isCorrect,
            "answer_given": answerID,
            "upvoted_explanation": explanationVotedFor,
            "wrote_explanation": explanationWrittenID
        });

        // HACK - everyone will get to this point if there's no previous error, so it's ok to alter state based on success of this one call.
        db.users.save(user, function (err, doc) {
            if (err) {
                // If it failed, return error
                res.send("There was a problem adding the information to the database.");
            } else {
                // If it worked, set the header so the address bar doesn't still say /adduser
                // res.location("mongotest");
                // And forward to success page
                // res.redirect("mongotest");
            }
        });
    });

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

    // TODO: change quizzes_taken to not be 1
    // Submit to the DB
    collection.insert({
        "name" : userName,
        "email" : userEmail,
        "is_control": Math.random() > 0.5,
        "quizzes_taken": {
            "1": {
                "time_started": Date.now(),
                "attempts": []
            }
        }
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            console.log(err);
            res.send("There was a problem adding the information to the database.");
        }
        else {
            res.end('{"success": true, "status": 200}');
            // If it worked, set the header so the address bar doesn't still say /adduser
            //res.location("mongotest");
            // And forward to success page
            //res.redirect("mongotest");
        }
    });
});

module.exports = router;
