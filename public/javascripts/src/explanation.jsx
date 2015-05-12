var React = require('react');



//A single explanation/solution for an answer


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
    

	var explNodes = this.props.explanations.map(function (explanations))
    return (
    	
    	<Explanation explanation = {explanations.explanation}>
    		
    		        		   			 
    	</div>








    )
}
});
