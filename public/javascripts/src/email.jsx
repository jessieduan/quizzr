var React = require('react');

module.exports = React.createClass({
doAlert: function() {
    alert("hi there!");
},
render: function() {
    return (
    <div>
        <h1>This is another email component again</h1>
        <input type='button' value='next' onClick={this.props.onNextButtonClicked} />
    </div>
    )
}
});