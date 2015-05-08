var React = require('react');
var EmailComponent = require('./email.jsx');
var QuestionComponent = require('./question.jsx');

module.exports = React.createClass({

   getInitialState : function() {
    return {
      questionNum : 0
    };
    },

advanceQuestion : function() {
    this.setState ({
        questionNum : this.state.questionNum + 1
    });
},

render: function() {
    var currentComponent = this.state.questionNum === 0 ?
        <EmailComponent onNextButtonClicked={this.advanceQuestion}/> :
        <QuestionComponent
            onNextButtonClicked={this.advanceQuestion}
            questionNum={this.state.questionNum} />;
    return (
        <div>
            {currentComponent}
        </div>
    );
}
});