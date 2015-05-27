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

/* POST when question answer is submitted */
router.post('/submitanswer', function(req, res) {
    // Set our internal DB variable
    var db = req.db;
    var quizCollection = db.get('quizzes');
    var userCollection = db.get('users');

    console.log(req.body);
    // Get our form values. These rely on the "name" attributes
    var userEmail = req.body.userEmail;
    var quizID = 1;
    var questionID = req.body.questionID;
    var answerID = req.body.answerID;
    var explanation = req.body.explanationWritten;
    var upvotedExplanations = JSON.parse(req.body.upvotedExplanations); // or none exists
    var downvotedExplanations = JSON.parse(req.body.downvotedExplanations); // or none exists

    // HACKS ON HACKS ON HACKS - can't use $push, so we resort to manually updating collections instead
    // add explanation
    quizCollection.findOne({ quiz_id: 1 }, function (err, quiz) {
        var isCorrect = (answerID == quiz['questions']['' + questionID]["correct_answer_id"]);

        var newAttempt = {
            "question_id": questionID,
            "is_correct": isCorrect,
            "answer_given": answerID,
            "upvoted_explanations": upvotedExplanations,
            "downvoted_explanations": downvotedExplanations
        };

        if (explanation || upvotedExplanations || downvotedExplanations) {
            var explanations = quiz["questions"]["" + questionID]["answers"]["" + answerID]["explanations"];

            if (explanation) {
                explanation = JSON.parse(explanation);
                explanations.push(explanation);
                newAttempt['explanation_written'] = explanation['explanation'];
                newAttempt['wrote_explanation'] = explanation['explanation_id'];
            }
            if (upvotedExplanations) {
                for (var i = 0; i < upvotedExplanations.length; i++) {
                    // HACK - b/c 1-indexed
                    explanations[upvotedExplanations[i] - 1]['upvotes'] += 1;
                }
            }
            if (downvotedExplanations) {
                console.log(explanations);
                for (var j = 0; j < downvotedExplanations.length; j++) {
                    explanations[downvotedExplanations[j] - 1]['upvotes'] -= 1;
                }
                console.log(explanations);
            }

            quizCollection.update({ quiz_id: 1 }, quiz, function (err, doc) {
                if (err) res.send("There was a problem adding the information to the database.");
            });
        }


        // TODO: UPDATE UPVOTED_EXPLANATIONS/DOWNVOTED_EXPLANATIONS
        // update users with user attempt
        userCollection.findOne({ email: userEmail }, function(userErr, user) {
            if (userErr) {
                console.log(userErr);
                return;
            }

            user["quizzes_taken"]["" + quizID]["attempts"].push(newAttempt);

            userCollection.update({ email: userEmail }, user, function(saveErr, doc) {
                if (saveErr) {
                    // If it failed, return error
                    console.log(saveErr);
                    res.send("There was a problem adding the information to the database.");
                } else {
                    console.log("success!");
                    // If it worked, set the header so the address bar doesn't still say /adduser
                    // res.location("mongotest");
                    // And forward to success page
                    // res.redirect("mongotest");
                }
            });
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
