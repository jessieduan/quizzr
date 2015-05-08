var React = require('react');
var EmailComponent = require('./email.jsx');
var QuestionComponent = require('./question.jsx');

module.exports = React.createClass({

   getInitialState : function() {
    return {
      questionNum : 0,
      currQuestionData : {}
    };
    },

advanceQuestion : function() {
    //console.log(this.props.)
    this.setState ({
        questionNum : this.state.questionNum + 1,
        currQuestionData : this.props.quizData.questions[this.state.questionNum]
    });
    console.log(this.state.currQuestionData);
},

render: function() {
    var currentComponent = this.state.questionNum === 0 ?
        <EmailComponent onNextButtonClicked={this.advanceQuestion}/> :
        <QuestionComponent
            onNextButtonClicked={this.advanceQuestion}
            question={this.state.currQuestionData}
            questionNum={this.state.questionNum} />;
    return (
        <div>
            {currentComponent}
        </div>
    );
}
});