var React = require('react');

//A single explanation/solution for an answer

module.exports = React.createClass({

render: function() {
    return (
        <div>
            <div>{this.props.explanation["explanation"]} </div>
            <div>
                <img src="/images/triangle_up"/>
                {this.props.explanation["upvotes"]}
                <img src="/images/triangle_down"/>
            </div>
        </div>
    );
    }
});
