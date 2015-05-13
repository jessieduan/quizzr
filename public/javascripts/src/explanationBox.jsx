var React = require('react');
var ExplanationComponent = require( './explanation.jsx')
var HelloWorld = require('./HelloWorld.jsx');


//Box holding list of explanations
module.exports = React.createClass({

onTextAreaClicked : function(event) {
    event.target.value="";
    console.log("text area was clicked");
},

componentWillReceiveProps : function(nextProps) {
    this.setState({
        explanations : nextProps.explanations,
    });
},

componentWillMount : function() {
     this.setState({
        explanations : this.props.explanations,
     });
},

updateText : function(event) {
    console.log("in update text")
    console.log("value: " + event.target.value)
    this.setState({
        newExplanation : event.target.value,
    })
},

onUpvoteOrExplanationAdded : function() {
    console.log("in explanationBox onUpvoteOrExplanationAdded");
     this.setState({
        explanations : this.props.explanations,
    });
    this.forceUpdate();
    this.props.onUpvoteOrExplanationAdded();
},

onExplanationSubmitted : function(event) {
    ///SEND THIS TO SERVER

    console.log("on explanation submitted")
    var newExplanationStr = this.state.newExplanation;
    console.log("new explanations str: " + newExplanationStr)
    var newExplanationObj = {
        "explanation_id" : this.state.explanations.length + 1,
        "explanation" : newExplanationStr,
        "upvotes": 0
    }
    console.log(this.state.explanations)
    var newExplanations = this.state.explanations;
    newExplanations.push(newExplanationObj);
    if (newExplanationStr != undefined) {
        this.setState({
            explanations : newExplanations,
            explanationSubmitted : true
        });
    }
    this.onUpvoteOrExplanationAdded();

    // $.get("http://localhost:3000/allQuizData", function(result) {
    //     console.log("in the callback");
    //     allQuizData = result;
    //     quizData = result[0];
    //    // DO STUFF HERE AFTER RECEIVING DATA FROM SERVER
    // }.bind(this));
},


getExplanations : function() {
 //TODO: sort these by value
 console.log("in get explanations");


   var listItems = [];

    var explanationsArray = new Array;
    for(var o in this.state.explanations) {
        explanationsArray.push(this.state.explanations[o]);
    }
    explanationsArray.sort(function(a, b) {
        return b.upvotes - a.upvotes;
    });

    //var explanations = this.state.explanations;
    for (var i = 0; i < explanationsArray.length; i++) {
        var newAnswer = (
            <div>
                <ExplanationComponent explanation={explanationsArray[i]}
                    onVote={this.onUpvoteOrExplanationAdded}/>
            </div>);
        listItems.push(newAnswer);
    }
    return listItems;
},

getExplanations : function() {
 //TODO: sort these by value
 console.log("in get explanations");


   var listItems = [];

    var explanationsArray = new Array;
    for(var o in this.state.explanations) {
        explanationsArray.push(this.state.explanations[o]);
    }
    explanationsArray.sort(function(a, b) {
        return b.upvotes - a.upvotes;
    });

    //var explanations = this.state.explanations;
    for (var i = 0; i < explanationsArray.length; i++) {
        var newAnswer = (
            <div>
                <ExplanationComponent explanation={explanationsArray[i]}
                    onVote={this.onUpvoteOrExplanationAdded}/>
            </div>);
        listItems.push(newAnswer);
    }
    return listItems;
},

render: function() {
    console.log("here in explanationBox");
    var incorrectStr = "Write an explanation for why the answer you chose is incorrect."
    var correctStr = "How did you know that this was the right answer?"
    console.log(this.props.correct);
    var textAreaStr = (this.props.correct) ? correctStr : incorrectStr;

    var addExplanationBox = (this.state.explanationSubmitted) ? null :
        (<div>
            <textarea
            className="explanationTextArea"
            ref="explanationTextArea"
            defaultValue={textAreaStr}
            onClick={this.onTextAreaClicked}
            onChange={this.updateText}/>
            <div>
                <input type='button' value='Add Suggestion' onClick={this.onExplanationSubmitted} />
            </div>
        </div>);

    return (
   <div>
       	<div className="ExplanationBox">
            {this.state.explanations}
            {addExplanationBox}
        </div>
    </div>
    );
  }
});

