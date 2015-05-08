var React = require('react');
var HelloWorld = require('./HelloWorld.jsx');

var allQuizData = JSON.parse(document.getElementById('quiz-data').innerHTML)
var quizData = allQuizData[0];
/*var quizData = {
    "quiz_id" : 1,
    "name": "CS376",
    "questions" :[{
        "question_id": 1,
        "question_str": "Is this a question?",
        "answers" : [
            {
                "answer_id" : 5,
                "answer" : "Johnson",
                "control_explanation": "correct",
                "explanations" : [{
                }],


                "answer_id" : 5,
                "answer" : "BBBBBBB",
                "control_explanation": "correct",
                "explanations" : [{
                }]

        }]
    }]
}*/

React.render(
    <HelloWorld quizData={quizData} />,
    document.getElementById('example')
);