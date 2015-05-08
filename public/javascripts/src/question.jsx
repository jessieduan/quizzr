var React = require('react');

module.exports = React.createClass({

getAnswers : function() {
    var listItems = [];
    var answers = this.props.question["answers"];
    for (var i = 0; i < answers.length; i++) {
        var newAnswer = (<h1>answers[i]["answer"]</h1>);
        listItems.push(newAnswer);
    }
    return listItems;
}

render: function() {
    return (
    <div>
        <h1>This is question number {this.props.questionNum} </h1>
        <h2>{this.props.question["question_str"]}</h2>
        {listItems}
        <input type='button' value='next' onClick={this.props.onNextButtonClicked} />
    </div>
    )
}
});