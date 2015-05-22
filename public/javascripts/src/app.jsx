var React = require('react');
var HelloWorld = require('./HelloWorld.jsx');

var allQuizData = JSON.parse(document.getElementById('quiz-data').innerHTML)
var quizData = allQuizData[0];

function DataStore (data) {
    this.quizData = data;
    this.userEmail = "";

    this.getQuizData = function() {
        return this.quizData;
    }

    this.render = function() {
        React.render(
            <HelloWorld quizData={this.quizData} />,
            document.getElementById('example')
        );
    };
    this.addExplanation = function(questionID, answerID, explanation) {
        this.quizData['questions'][questionID]['answers'][answerID]['explanations'].push(explanation);
        this.render();
    };

    this.addVote = function(questionID, answerID, explanationID, value) {
        //value should either be 1 (for upvote) or -1 (for downvote)
        var explanations = this.quizData['questions'][questionID]['answers'][answerID]['explanations'];
        for (var i = 0; i < explanations.length; i++) {
            var explanation = explanations[i];
            if (parseInt(explanation["explanation_id"]) == parseInt(explanationID)) {
                explanation["upvotes"] = explanation["upvotes"] + value;
            }
        }
        this.render();
    };

    this.saveNewUser = function(userName, email) {
        this.userEmail = email;
        var newUser = {
            username: userName,
            useremail: email
        };

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
        var newAttempt = {};
        /*
        var newAttempt = {
            useremail: this.useremail,
            quizID: 1,
            questionID: questionID,
            answerID: this.state.selectedAnswer,
            explanationWritten: ,
            explanationVotedFor: ,
            wasUpvote: ,
        };*/

        $.ajax({
            url: '/submitanswer',
            dataType: 'json',
            type: 'POST',
            data: newAttempt,
            success: function(data) {
                console.log("success");
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
            }.bind(this)
        });
    };

    this.addAttempt = function() {
        this.render();
    };
};

dataStore = new DataStore(quizData);
dataStore.render();
