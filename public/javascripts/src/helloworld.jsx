var React = require('react');
var EmailComponent = require('./email.jsx');
var QuestionComponent = require('./question.jsx');

module.exports = React.createClass({

   getInitialState : function() {
    return {
      component : <EmailComponent />,
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
        <QuestionComponent questionNum={this.state.questionNum} />;
    return (
        <div>
            {currentComponent}
        </div>
    );
}
});