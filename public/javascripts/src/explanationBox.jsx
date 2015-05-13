var React = require('react');
var explanationComponent = require( './explanation.jsx')


//Box holding list of explanations 
module.exports = React.createClass({

render: function() {
    return (
   <div>
       	<div className="CommentBox">    
           Hello, world I am a CommentBox.
       
        <explanationComponent explanations={explanations} />
             

      //  </div>
    
    </div>
	 	  
    );
  }
});

