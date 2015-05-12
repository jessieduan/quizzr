var React = require('react');
var HelloWorld = require('./HelloWorld.jsx');

var allQuizData = JSON.parse(document.getElementById('quiz-data').innerHTML)
var quizData = allQuizData[0];

React.render(
    <HelloWorld quizData={quizData} />,
    document.getElementById('example')
);