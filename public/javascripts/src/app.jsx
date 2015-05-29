var React = require('react');
var HelloWorld = require('./HelloWorld.jsx');

var allQuizData = JSON.parse(document.getElementById('quiz-data').innerHTML);
var quizData = allQuizData[0];

function DataStore (data) {
    this.quizData = data;
    this.userEmail = "";
    this.attempts = {};
    this.isControl = false;

    this.getQuizData = function() {
        return this.quizData;
    };

    this.render = function() {
        React.render(
            <HelloWorld quizData={this.quizData} />,
            document.getElementById('example')
        );
    };

    this.selectAnswer = function(questionID, answerID) {
        console.log("selectAnswer questionID: " + questionID);
        if (!(questionID in this.attempts)) {
            this.attempts[questionID] = {};
            this.attempts[questionID]["userEmail"] = this.userEmail;
            this.attempts[questionID]["questionID"] = parseInt(questionID);
            this.attempts[questionID]["upvotedExplanations"] = [];
            this.attempts[questionID]["downvotedExplanations"] = [];
        }
        this.attempts[questionID]["answerID"] = parseInt(answerID);
    };

    this.addExplanation = function(questionID, answerID, explanation) {
        this.attempts[questionID]["explanationWritten"] = JSON.stringify(explanation);
        this.quizData['questions'][questionID]['answers'][answerID]['explanations'].push(explanation);
        this.render();
    };

    this.addVote = function(questionID, answerID, explanationID, value) {
        //value should either be 1 (for upvote) or -1 (for downvote)
        if (value == 1) this.attempts[questionID]["upvotedExplanations"].push(explanationID);
        else this.attempts[questionID]["downvotedExplanations"].push(explanationID);

        var explanations = this.quizData['questions'][questionID]['answers'][answerID]['explanations'];
        for (var i = 0; i < explanations.length; i++) {
            var explanation = explanations[i];
            if (parseInt(explanation["explanation_id"]) == parseInt(explanationID)) {
                explanation["upvotes"] = explanation["upvotes"] + value;
            }
        }
        this.render();
    };

    this.saveNewUser = function(userName, email, isControl) {
        this.userEmail = email;
        var newUser = {
            username: userName,
            useremail: email,
            isControl: isControl
        };

        console.log("CONTROL: " + this.isControl);
        this.isControl = isControl;

        $.ajax({
            url: '/adduser',
            dataType: 'json',
            type: 'POST',
            data: newUser,
            success: function(data) {
                console.log("success");
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
            }.bind(this)
        });

    };

    this.saveAttempt = function(questionID) {
        this.attempts[questionID]['upvotedExplanations'] = JSON.stringify(this.attempts[questionID]['upvotedExplanations']);
        this.attempts[questionID]['downvotedExplanations'] = JSON.stringify(this.attempts[questionID]['downvotedExplanations']);

        console.log("SAVING ATTEMPT:");
        console.log(this.attempts[questionID]);

        $.ajax({
            url: '/submitanswer',
            dataType: 'json',
            type: 'POST',
            data: this.attempts[questionID],
            success: function(data) {
                console.log("success");
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
            }.bind(this)
        });
    };

    this.saveSurvey = function(surveyDict) {
        console.log(surveyDict);
        // surveyDict is in this format:
        // {
        // "1" : "answer to 1",
        // "2" : "answer to 2",
        // "3" : "answer to 3",
        // "4" : "answer to 4",
        // };
    }

    this.addAttempt = function() {
        this.render();
    };
};

dataStore = new DataStore(quizData);
dataStore.render();
