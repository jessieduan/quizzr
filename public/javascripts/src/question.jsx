var React = require('react');

module.exports = React.createClass({

    getInitialState : function() {
        return {
            selectedQuestion : undefined,
        };
    },

    selectAnswer : function(event) {
        //console.log(this.props.)
        /*this.setState ({
            selectedQuestion : questionNum,
        });*/

        //alert(questionNum);
        //quiz id
        //question id
        //answer chosen = answer_id
        //user id
        //alert("selected question")
         //var selectedAnswer = this.refs.answersGroup.getCheckedValue();
        var index = event.target.value;
        console.log(index);
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
        </div>
        )
}
});