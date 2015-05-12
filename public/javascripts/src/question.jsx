var React = require('react');
var ExplanationBoxComponent = require('./explanationBox.jsx');

var explanations = 
[
  { "explanation" : "This is an explanation 1"}, 
  { "explanation" : "This is an explanation 2"}
];

module.exports = React.createClass({


getInitialState: function() {

	return {explanations: []}
},

componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(explanations) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

render: function() {
    return (
   <div>
	    <h1>This is a question number question number {this.props.questionNum} </h1>
	    <input type='button' value='next' onClick={this.props.onNextButtonClicked} />
	    
	   			<ExplanationBoxComponent explanations={explanations} />
	   			 
	   			 

	</div>    
    )
}
});