var React = require('react');

module.exports = React.createClass({
render: function() {
    return (
    <div>
        <h1>This is question number {this.props.questionNum} </h1>
        <input type='button' value='next' onClick={this.props.onNextButtonClicked} />
    </div>
    )
}
});