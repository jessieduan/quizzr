var React = require('react');
var EmailComponent = require('./email.jsx');
var QuestionComponent = require('./question.jsx');
var QuizFinishedComponent = require('./quizFinished.jsx');


module.exports = React.createClass({

   getInitialState : function() {
    return {
      questionNum : 0,
      currQuestionData : {}
    };
    },

getFinishedPage : function() {
    return (
        <div>
            Thanks for completing our quiz!
        </div>
    );
},

onAnswerSelected : function(answer) {
    //alert(answer);
},

getCurrentComponent : function() {
    if (this.state.questionNum === 0) {
        return (<EmailComponent onNextButtonClicked={this.advanceQuestion}/>);
    } else if ((this.state.questionNum) in this.props.quizData.questions) {
         return (
            <QuestionComponent
            onNextButtonClicked={this.advanceQuestion}
            onAnswerSelected={this.onAnswerSelected}
            question={this.props.quizData.questions[this.state.questionNum]}
            questionNum={this.state.questionNum} />);
    } else {
        return (<QuizFinishedComponent />);
        //console.log(this.props.quizData.questions[this.state.questionNum-1]);
    }
},

advanceQuestion : function() {
    //console.log(this.props.)
    this.setState ({
        questionNum : this.state.questionNum + 1,
    });
},


render: function() {
    return (
        <div>
            {this.getCurrentComponent()}
        </div>
    );
}
});