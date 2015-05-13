var React = require('react');

//A single explanation/solution for an answer

module.exports = React.createClass({

render: function() {
    return (
        <div>
            <p> {this.props.explanation["explanation"]} </p>
        </div>
    );
}
});
