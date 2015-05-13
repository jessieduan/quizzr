var React = require('react');
var ExplanationBoxComponent = require('./explanationBox.jsx');

module.exports = React.createClass({


    getInitialState : function() {
        return {
            selectedQuestion : undefined,
            explanations : null,
        };
    },

    componentWillReceiveProps: function(nextProps) {
        if (nextProps.questionNum != this.props.questionNum) {
            this.setState({
                selectedQuestion : undefined,
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
            selectedQuestion : index,
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
    for (var i = 0; i < answers.length; i++) {
        var newAnswer = (
            <div>
            <label>
                <input type="radio"
                 name="answerButtons"
                 value={i}
                 onClick={this.selectAnswer} />
                    {answers[i]["answer"]}
            </label>
            </div>);
        listItems.push(newAnswer);
    }
    return listItems;
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
        <input type='button' value='next' onClick={this.props.onNextButtonClicked} />
            {this.state.explanations}
        </div>
        )
}
});