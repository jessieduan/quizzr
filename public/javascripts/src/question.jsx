var React = require('react');
var ExplanationBoxComponent = require('./explanationBox.jsx');

module.exports = React.createClass({


    getInitialState : function() {
        return {
            selectedAnswer : undefined,
            explanations : null,
        };
    },

    componentWillReceiveProps: function(nextProps) {
        if (nextProps.questionNum != this.props.questionNum) {
            this.setState({
                selectedAnswer : undefined,
                explanations : null,
            });
        }
    },

    selectAnswer : function(event) {
        //$iconsole.log(this.props.)


        //alert(questionNum);
        //quiz id
        //question id
        //answer chosen = answer_id
        //user id
        //alert("selected question")
         //var selectedAnswer = this.refs.answersGroup.getCheckedValue();

        var index = event.target.value;
        console.log(index);
        this.setState ({
            selectedAnswer : index,
            explanations : <ExplanationBoxComponent explanations={this.props.question["answers"][index]["explanations"]} />
        });
        console.log("adding explanations")
        console.log(this.props.question["answers"][index]["explanations"]);
        this.props.onAnswerSelected(this.props.question["answers"][index]);
    },

getAnswers : function() {
//                 value={answers[i]['answer_id']}
    var listItems = [];
    var answers = this.props.question["answers"];
    for (var i = 1; i <= Object.keys(answers).length; i++) {
        var newAnswer = (
            <div>
            <label>
                <input type="radio"
                 name="answerButtons"
                 checked={this.state.selectedQuestion == i}
                 value={i}
                 onClick={this.selectAnswer} />
                    {answers[i]["answer"]}
            </label>
            </div>);
        listItems.push(newAnswer);
    }
    return listItems;
},

formSubmitted : function() {
    event.preventDefault(event);

    // TODO: POPULATE newAttempt
    var newAttempt = {};
/*
    var newAttempt = {
        useremail: ,
        quizID: 1,
        questionID: this.props.questionNum,
        answerID: this.state.selectedAnswer,
        explanationWritten: ,
        explanationVotedFor: ,
        wasUpvote: ,
    };
*/
    $.ajax({
        url: '/submitanswer',
        dataType: 'json',
        type: 'POST',
        data: newAttempt,
        success: function(data) {
            this.props.onNextButtonClicked();
        }.bind(this),
        error: function(xhr, status, err) {
            console.log(err);
        }.bind(this)
    });
},

render: function() {
    console.log("received data: ");
    console.log(this.props.question)
    return (

        <div>
        <h2>{this.props.question["question_str"]}</h2>
        <form onSubmit={this.formSubmitted}>
                <div> {this.getAnswers()} </div>
        </form>
        {this.state.explanations}
        <input type='button' value='next' onClick={this.props.onNextButtonClicked} />
        </div>
        )
}
});