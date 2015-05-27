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
                 disabled = {this.props.disabled}
                 value={this.props.answerID}
                 onClick = {this.onSelectAnswer} />
                 <label htmlFor={"label_" + this.props.answerID}
                    className={this.props.correct ? "correctLabel" : "incorrectLabel"}
                    id={this.props.labelID}>
                {this.props.answerStr}
                </label>
            </div>
    );
}
});