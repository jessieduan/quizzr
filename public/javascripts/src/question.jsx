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

        var newExplanations = this.props.question["answers"][index]["explanations"];
        this.setState ({
            selectedAnswer : index,
        });
        dataStore.selectAnswer(this.props.questionNum, index);
        this.props.onAnswerSelected(this.props.question["answers"][index]);
    },

getAnswers : function() {
    var listItems = [];
    var answers = this.props.question["answers"];
    for (var i = 1; i <= Object.keys(answers).length; i++) {
        var correct = i === parseInt(this.props.question["correct_answer_id"]);
        var selected = this.state.selectedAnswer == i;
        var labelID = "";
        if (selected && !correct) {
            labelID = "incorrectlySelectedLabel";
        } else if (correct && this.state.selectedAnswer != undefined) {
            labelID = "correctlySelectedLabel";
        }
        var newAnswer = (
            <AnswerComponent
                checked={selected}
                correct = {correct}
                disabled = {this.state.selectedAnswer != undefined}
                answerID={i}
                labelID={labelID}
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
        dataStore.saveAttempt(this.props.questionNum);
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
},

render: function() {
    var explanationsArray = (this.state.selectedAnswer) ? this.props.question["answers"][this.state.selectedAnswer]["explanations"] : [];
    var correct = (this.state.selectedAnswer) ?
        (parseInt(this.state.selectedAnswer) === parseInt(this.props.question["correct_answer_id"]))
        : false;
    console.log("CORRECT: " + correct)
    console.log("SELECTED: " + this.state.selectedAnswer)
    var experimentalExplanationBox = (this.state.selectedAnswer) ?
        (<ExplanationBoxComponent
                explanations={explanationsArray}
                correct={correct}
                questionID={this.props.questionNum}
                answerID={this.state.selectedAnswer}
                onUpvoteOrExplanationAdded = {this.onUpvoteOrExplanationAdded} />) : null;

    var controlExplanationBox = (this.state.selectedAnswer && explanationsArray.length > 0) ?
        (<div> {explanationsArray[0]["explanation"]}</div>) : null;
    var explanationBox = (dataStore.isControl) ? controlExplanationBox : experimentalExplanationBox;
    //var explanationBox = (true) ? controlExplanationBox : experimentalExplanationBox;

    return (
        <div>
        <h2>{this.props.question["question_str"]}</h2>
        <form onSubmit={this.formSubmitted} className="answersForm">
                <div> {this.getAnswers()} </div>
        </form>
        <br/>
        {explanationBox}
        <input type='button' value='next >' onClick={this.onNextButtonClicked} />
        <div className="errorMessage">{this.state.errorMessage}</div>
        </div>
        )
}
});