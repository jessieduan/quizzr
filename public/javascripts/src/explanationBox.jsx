var React = require('react');
var ExplanationComponent = require( './explanation.jsx')


//Box holding list of explanations
module.exports = React.createClass({

onTextAreaClicked : function() {
    console.log("text area was clicked");
},

onSuggestionSubmitted : function() {
    console.log("on suggestion submitted")
},

getExplanations : function() {
 var listItems = [];
    var explanations = this.props.explanations;
    for (var i = 0; i < explanations.length; i++) {
        var newAnswer = (
            <div>
                <ExplanationComponent explanation={explanations[i]} />
            </div>);
        listItems.push(newAnswer);
    }
    return listItems;
},

render: function() {
    console.log("here in explanationBox");
    return (
   <div>
       	<div className="CommentBox">
            {this.getExplanations()}
                <textarea
                    defaultValue="Write an explanation for why the answer you chose is incorrect."
                    onClick={this.onTextAreaClicked}/>
                <input type='button' value='Add Suggestion' onClick={this.onSuggestionSubmitted} />
        </div>
    </div>
    );
  }
});

