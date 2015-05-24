var React = require('react');
var ExplanationBoxComponent = require('./explanationBox.jsx');
var AnswerComponent = require('./answer.jsx');


module.exports = React.createClass({


    getInitialState : function() {
        return {
            selectedAnswer : undefined,
            explanations : null,
            canContinue : false,
            errorMessage : null,
        };
    },

    onUpvoteOrExplanationAdded : function() {
        this.setState({
            canContinue : true,
            errorMessage : null,
        });
    },

    componentWillReceiveProps: function(nextProps) {
        if (nextProps.questionNum != this.props.questionNum) {
            this.setState({
                selectedAnswer : undefined,
                explanations : null,
                canContinue : false,
                errorMessage : null,
            });
        }
    },

    selectAnswer : function(index) {
        //var index = event.target.value;
        console.log("SELECTING: " + index);

        var newExplanations = this.props.question["answers"][index]["explanations"];
        this.setState ({
            selectedAnswer : index,
        });
        console.log("adding explanations")
        console.log(newExplanations);
        this.props.onAnswerSelected(this.props.question["answers"][index]);
    },

getAnswers : function() {
    var listItems = [];
    var answers = this.props.question["answers"];
    for (var i = 1; i <= Object.keys(answers).length; i++) {
        var newAnswer = (
            <AnswerComponent
                checked={this.state.selectedAnswer == i}
                correct = {i === parseInt(this.props.question["correct_answer_id"])}
                answerID={i}
                onSelectAnswer={this.selectAnswer}
                answerStr = {answers[i]["answer"]}/>
           );
        listItems.push(newAnswer);
    }
    return listItems;
},

onNextButtonClicked : function() {
    if (this.state.canContinue) {
        this.props.onNextButtonClicked();
        return;
    } if (this.state.selectedAnswer) {
        this.setState({
        errorMessage : "Please add a new explanation or upvote an existing one!"
        });
    } else {
    this.setState({
        errorMessage : "Please select an answer!"
    });
}
},

formSubmitted : function() {
    event.preventDefault(event);
    dataStore.saveAttempt();
    // TODO: POPULATE newAttempt

},

render: function() {

    var correct = (this.state.selectedAnswer) ?
        (parseInt(this.state.selectedAnswer) === parseInt(this.props.question["correct_answer_id"]))
        : false;
    var explanationBox = (this.state.selectedAnswer) ?
        (<ExplanationBoxComponent
                explanations={this.props.question["answers"][this.state.selectedAnswer]["explanations"]}
                correct={correct}
                questionID={this.props.questionNum}
                answerID={this.state.selectedAnswer}
                onUpvoteOrExplanationAdded = {this.onUpvoteOrExplanationAdded} />) : null;

    console.log("received data: ");
    console.log(this.props.question)
    return (
        <div>
        <h2>{this.props.question["question_str"]}</h2>
        <form onSubmit={this.formSubmitted} className="answersForm">
                <div> {this.getAnswers()} </div>
        </form>
        {explanationBox}
        <input type='button' value='next >' onClick={this.onNextButtonClicked} />
        <div className="errorMessage">{this.state.errorMessage}</div>
        </div>
        )
}
});