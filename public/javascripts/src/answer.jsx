var React = require('react');

module.exports = React.createClass({
    onSelectAnswer : function() {
        this.props.onSelectAnswer(this.props.answerID);
    },

    render: function() {
    return (
         <div>

                <input type="radio"
                 name="answerButtons"
                 id={"label_" + this.props.answerID}
                 checked={this.props.checked}
                 value={this.props.answerID}
                 onClick = {this.onSelectAnswer} />
                 <label htmlFor={"label_" + this.props.answerID}
                    className={this.props.correct ? "correctLabel" : "incorrectLabel"}>
                {this.props.answerStr}
            </label>
            </div>
    );
}
});